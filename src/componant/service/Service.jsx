import React from "react";

const Service = () => {
  const services = [
    {
      id: 1,
      title: "بيع وشراء العقارات",
      description:
        "نساعدك في عملية بيع وشراء العقارات بأسعار منافسة وخدمة احترافية مع فريق متخصص في التقييم والتفاوض",
      image: "./logo3.png",
      features: [
        "تقييم العقار",
        "التفاوض على السعر",
        "إتمام الصفقات",
        "متابعة ما بعد البيع",
      ],
    },
    {
      id: 2,
      title: "الإيجار والتأجير",
      description:
        "نوفر لك أفضل العقارات للإيجار بشروط مرنة وعقود آمنة تناسب جميع الاحتياجات والميزانيات",
      image: "./logo3.png",
      features: ["عقود آمنة", "شروط مرنة", "إدارة الممتلكات", "خدمة الصيانة"],
    },
    {
      id: 3,
      title: "الاستشارات العقارية",
      description:
        "نقدم استشارات متخصصة تساعدك في اتخاذ القرارات الاستثمارية الصحيحة بناءً على تحليل السوق",
      image: "./logo3.png",
      features: [
        "دراسة الجدوى",
        "تحليل السوق",
        "نصائح استثمارية",
        "متابعة الأداء",
      ],
    },
  ];

  return (
    <div className="p-10 " id="services">
      <div className="flex flex-col text-center justify-center">
        <h1 className="my-5 text-6xl md:text-7xl font-bold text-white drop-shadow-2xl ">
          خدماتنا
        </h1>

        <p className="w-[50%] m-5 text-xl md:text-2xl font-medium text-white max-w-3xl mx-auto leading-relaxed">
          نقدم مجموعة واسعة من الخدمات العقارية لتلبية جميع احتياجاتك
        </p>
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 p-7"
        dir="rtl"
      >
        {services.map((service) => (
          <div
            key={service.id}
            className="group  flex flex-col bg-white rounded-2xl shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200 overflow-hidden"
          >
            <div className="relative overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-56 object-cover rounded-t-2xl group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <div className="p-8">
              <h1 className="text-gray-800 group-hover:text-[#d4af37] text-2xl font-bold mb-4 transition-colors duration-300">
                {service.title}
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed">
                {service.description}
              </p>
            </div>

            <div className="p-8">
              <h1 className=" text-[#d4af37] text-2xl font-bold mb-4">
                المميزات
              </h1>
              <div className="text-gray-600 text-lg leading-relaxed">
                {service.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 space-x-reverse"
                  >
                    {feature}
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute bottom-0 left-0 h-1 w-full bg-[#d4af37] "></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
