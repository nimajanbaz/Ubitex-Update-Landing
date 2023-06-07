FROM node:lts-alpine AS builder
ENV NODE_ENV production
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN yarn install
COPY . .
RUN yarn build
FROM nginx:1.23.3-alpine as production
ENV NODE_ENV production
COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 7065
CMD ["nginx", "-g", "daemon off;"]