import React from "react";
import { FaUsers, FaAward, FaChartLine } from "react-icons/fa6";
import { FaHandshake } from "react-icons/fa";

const WhyUs = () => {
  const whyUs = [
    {
      id: 1,
      title: "خبره طويلة",
      description: "أكثر من 15 عاماً من الخبرة في مجال العقارات محلياً ودولياً",
      icon: <FaChartLine />,
    },
    {
      id: 2,
      title: "فريق محترف",
      description:
        "فريق من الخبراء والمستشارين العقاريين المحترفين ذوي الخبرة الواسعة",
      icon: <FaUsers />,
    },
    {
      id: 3,
      title: "جودة الخدمة",
      description:
        "نلتزم بأعلى معايير الجودة في تقديم خدماتنا لضمان رضا العملاء",
      icon: <FaAward />,
    },
    {
      id: 4,
      title: "شبكة واسعة",
      description:
        "شبكة علاقات واسعة في سوق العقارات المحلي والدولي لتلبية جميع احتياجاتك",
      icon: <FaHandshake />,
    },
  ];
  return (
    <div className="m-8">
      <div className="flex flex-col text-center justify-center">
        <h1 className="my-5 text-6xl  font-bold  text-white ">
          لماذا تختار شركة المجد؟
        </h1>

        <p className="w-[50%] my-5 text-xl  font-medium text-white  max-w-3xl mx-auto leading-relaxed">
          نحن نتميز بتقديم خدمات عقارية متميزة تلبي توقعات عملائنا
        </p>
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 p-7"
        dir="rtl"
      >
        {whyUs.map((card) => (
          <div
            key={card.id}
            className="group text-center flex flex-col bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200 hover:border-[#d4af37]/30 overflow-hidden"
          >
            <div className="absolute top-0 left-0 h-1 w-full bg-[#d4af37] "></div>

            <div className="p-8">
              <div className="text-[#d4af37] p-5 text-5xl flex justify-center">
                {card.icon}
              </div>

              <h1 className="text-gray-800 text-2xl font-bold mb-4 transition-colors duration-300">
                {card.title}
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
