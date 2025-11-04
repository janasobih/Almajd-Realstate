import React from "react";
import { FaHistory, FaBullseye, FaEye, FaRocket } from "react-icons/fa";

const About = () => {
  const aboutData = [
    {
      id: 1,
      title: "رؤيتنا",
      description:
        "أن نكون الشركة العقارية الرائدة في المنطقة من خلال تقديم حلول عقارية مبتكرة وخدمة استثنائية.",
      icon: <FaEye className="text-4xl" />,
    },
    {
      id: 2,
      title: "رسالتنا",
      description:
        "توفير خدمات عقارية متكاملة تلبي تطلعات عملائنا وتحقق أحلامهم العقارية بأعلى معايير الجودة.",
      icon: <FaBullseye className="text-4xl" />,
    },
    {
      id: 3,
      title: "تاريخنا",
      description:
        "أكثر من 15 عاماً من الخبرة والنجاح في سوق العقارات المحلي والدولي.",
      icon: <FaHistory className="text-4xl" />,
    },
    {
      id: 4,
      title: "طموحنا",
      description:
        "التوسع المستمر ومواكبة أحدث التطورات في القطاع العقاري لتقديم الأفضل دائماً.",
      icon: <FaRocket className="text-4xl" />,
    },
  ];

  return (
    <div className="py-20 px-8" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            من نحن
          </h1>
          <p className="w-[50%] text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto">
            شركة المجد للعقارات رائدة في مجال الخدمات العقارية، نقدم حلولاً
            متكاملة تلبي جميع احتياجاتك
          </p>
        </div>

        <div className="p-8 text-right">
          <h2 className="text-4xl font-bold text-white mb-6">قصتنا</h2>

          <p className="text-gray-200 text-lg">
            نتأسست شركة المجد العقارية برؤية طموحة تهدف إلى إحداث نقلة نوعية في
            عالم التطوير والاستثمار العقاري. نحن نؤمن بأن العقار ليس مجرد مبنى،
            بل هو قيمة تُبنى على الثقة، والجودة، والرؤية المستقبلية. على مدار
            سنوات من العمل والخبرة، استطاعت شركة المجد أن ترسّخ مكانتها بين كبرى
            الشركات العقارية بفضل مشاريعها المتميزة، التي تجمع بين التصميم
            العصري والبنية المتينة والمواقع الاستراتيجية. نحرص دائمًا على تقديم
            حلول عقارية متكاملة تلبي احتياجات عملائنا، سواء في السكن أو
            الاستثمار، مع ضمان أعلى معايير الجودة والدقة في التنفيذ. رؤيتنا هي
            أن نكون الشريك الأول في بناء مستقبل عقاري مزدهر، يحمل بصمة المجد في
            كل مشروع ننجزه.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
          {aboutData.map((item) => (
            <div
              key={item.id}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-amber-400/50 transition-all duration-300 group hover:transform hover:-translate-y-2"
            >
              <div className="text-[#d4af37] mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">
                {item.title}
              </h3>
              <p className="text-gray-200 text-lg leading-relaxed text-center">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
