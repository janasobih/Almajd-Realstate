import React, { useState } from "react";
import { FaPhoneAlt, FaGlobe, FaPaperPlane } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const contact = [
    {
      id: 1,
      title: "هاتف",
      description: "01018881050",
      icon: <FaPhoneAlt className="text-4xl" />,
      link: "tel:01018881050",
    },
    {
      id: 2,
      title: "البريد الإلكتروني",
      description: "Almajdrealstate@gmail.com",
      icon: <MdEmail className="text-4xl" />,
      link: "mailto:Almajdrealstate@gmail.com",
    },
    {
      id: 3,
      title: "الموقع الإلكتروني",
      description: "www.almajdrealestate.com",
      icon: <FaGlobe className="text-4xl" />,
      link: "https://www.almajdrealestate.com",
    },
    {
      id: 4,
      title: "العنوان",
      description: "القاهرة، مصر",
      icon: <FaLocationDot className="text-4xl" />,
      link: "#",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="py-20 px-8" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            اتصل بنا
          </h1>
          <p className="w-[50%] text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            نحن هنا لمساعدتك في جميع استفساراتك العقارية. تواصل معنا وسنكون
            سعداء بخدمتك
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12" dir="rtl">
          <div>
            <h2 className="text-3xl font-bold text-[#d4af37] mb-8">
              طرق التواصل
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contact.map((info) => (
                <a
                  key={info.id}
                  href={info.link}
                  className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-amber-400/50 transition-all duration-300 hover:transform hover:-translate-y-1 text-center"
                >
                  <div className="text-[#d4af37] mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {info.icon}
                  </div>
                  <h3 className="text-white text-xl font-bold mb-2">
                    {info.title}
                  </h3>
                  <p className="text-gray-200 text-lg">{info.description}</p>
                </a>
              ))}
            </div>

            <div className="mt-8 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-2xl font-bold text-[#d4af37] mb-4 text-center">
                أوقات العمل
              </h3>
              <div className="space-y-3 text-center">
                <div className="flex justify-between text-gray-200 text-lg">
                  <span>الأحد - الخميس:</span>
                  <span className="text-[#d4af37]">9:00 ص - 6:00 م</span>
                </div>
                <div className="flex justify-between text-gray-200 text-lg">
                  <span>الجمعة - السبت:</span>
                  <span className="text-[#d4af37]">10:00 ص - 4:00 م</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h2 className="text-3xl font-bold text-[#d4af37] mb-6">
              أرسل رسالة
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white text-lg mb-2">
                    الاسم الكامل
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#d4af37] focus:bg-white/20 transition-colors duration-300"
                    placeholder="أدخل اسمك الكامل"
                  />
                </div>
                <div>
                  <label className="block text-white text-lg mb-2">
                    البريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#d4af37] focus:bg-white/20 transition-colors duration-300"
                    placeholder="example@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white text-lg mb-2">
                  رقم الهاتف
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#d4af37] focus:bg-white/20 transition-colors duration-300"
                  placeholder="01XXXXXXXXX"
                />
              </div>

              <div>
                <label className="block text-white text-lg mb-2">الرسالة</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#d4af37] focus:bg-white/20 transition-colors duration-300 resize-none"
                  placeholder="اكتب رسالتك هنا..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#d4af37]  text-white text-xl font-bold py-4 px-8 rounded-xl hover:bg-[#d4af37]  transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
              >
                <FaPaperPlane />
                إرسال الرسالة
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
