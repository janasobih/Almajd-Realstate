import React from "react";

const Home = () => {
  return (
    <div
      className="flex flex-col gap-9 justify-center items-center w-full min-h-screen text-white p-8 relative overflow-hidden bg-cover bg-center bg-no-repeat bg-fixed"
      style={{
        backgroundImage: `linear-gradient(135deg, rgb(2 23 78) 0%, rgb(10 110 80 / 21%) 100%), url(./home.png)`,
      }}
    >
      <div className="text-center space-y-8 relative z-10 max-w-4xl mt-20 md:mt-0">
        <h1 className="text-6xl md:text-7xl font-bold text-[#d4af37]">
          شركة المجد للعقارات
        </h1>

        <p className="text-2xl md:text-3xl  font-medium">
          نساعدك في تحقيق أحلامك العقارية مع فريق محترف وخدمة متميزة. اكتشف معنا
          عالم العقارات واجد الفرص الاستثمارية المناسبة لك
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-8">
          <button className="rounded-full text-white text-xl font-bold bg-[#d4af37] py-5 px-14 shadow-2xl hover:shadow-[#d4af37]/40 transition-all duration-300 transform hover:scale-110  border-2 border-[#d4af37] relative group">
            اتصل بنا الآن
            <span className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
          </button>
          <a href=""></a>
          <button className="rounded-full text-[#d4af37] text-xl font-bold bg-transparent py-5 px-14 shadow-2xl hover:bg-[#d4af37]/10 transition-all duration-300 transform hover:scale-105 border-2 border-[#d4af37] relative group">
            خدماتنا
            <span className="absolute inset-0 rounded-full bg-[#d4af37] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
