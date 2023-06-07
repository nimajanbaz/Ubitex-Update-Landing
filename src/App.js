import React from "react";
import { RxUpdate } from "react-icons/rx";

function App() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-[#04162d] text-white text-center font-display rtl-grid gap-7 px-8">
      <span className="text-4xl !text-white animate-spin">
        <RxUpdate />
      </span>
      <h2 className="text-[#f39200] text-4xl font-semibold">
        همراهان گرامی یوبیتکس!
      </h2>
      <p className="max-w-3xl text-xl">
        درحال بروزرسانی زیرساختی پلتفرم یوبیتکس هستیم و پیشبینی میکنیم حداکثر به
        مدت 9999 ساعت امکان استفاده از خدمات یوبیتکس غیرفعال خواهد بود
      </p>
      <p className="max-w-3xl ">همچنان میتوانید از طریق پشتیبانی آنلاین 24 ساعته در 7 روز هفته از طریق چت آنلاین شناور پایین صفحه راه های ارتباطی زیر با ما در تماس باشید:</p>
      <div className="flex justify-center items-center gap-5">
        <a href="https://ubitex.io" className="text-[#f39200] bg-[#f39200] bg-opacity-10 hover:bg-opacity-20 px-6 py-2 rounded-md cursor-pointer transition-all">
          وبسایت
        </a>
        <a href="https://instagram.com/ubitex_io" className="text-[#f39200] bg-[#f39200] bg-opacity-10 hover:bg-opacity-20 px-6 py-2 rounded-md cursor-pointer transition-all">
          اینستاگرام
        </a>
      </div>
    </div>
  );
}

export default App;
