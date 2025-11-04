import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-7xl mx-auto px-8 text-white pt-16 pb-8 text-center md:text-right">
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        dir="rtl"
      >
        <div className="lg:col-span-2">
          <h3 className="text-3xl font-bold text-[#d4af37] mb-6">
            شركة المجد للعقارات
          </h3>
          <p className="w-[100%] md:w-[70%] text-lg leading-relaxed mb-6 ">
            شركة المجد العقارية — نسعى لتقديم مشاريع سكنية وتجارية تجمع بين
            الجودة والتصميم المتميز، مع التزامنا ببناء ثقة دائمة مع عملائنا
            وتوفير حلول عقارية تلبي احتياجاتهم وتواكب تطلعاتهم المستقبلية
          </p>
        </div>

        <div>
          <h4 className="text-2xl font-bold text-[#d4af37] mb-6">
            روابط سريعة
          </h4>
          <ul className="space-y-3">
            <li>
              <a
                href="#home"
                className=" hover:text-[#d4af37] transition-colors duration-300 text-lg"
              >
                الرئيسية
              </a>
            </li>
            <li>
              <a
                href="#about"
                className=" hover:text-[#d4af37] transition-colors duration-300 text-lg"
              >
                من نحن
              </a>
            </li>
            <li>
              <a
                href="#services"
                className=" hover:text-[#d4af37] transition-colors duration-300 text-lg"
              >
                خدماتنا
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className=" hover:text-[#d4af37] transition-colors duration-300 text-lg"
              >
                اتصل بنا
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-2xl font-bold text-[#d4af37] mb-6">تواصل معنا</h4>
          <div className="space-y-4">
            <div className="flex items-center justify-center md:justify-start space-x-3 space-x-reverse">
              <FaPhone className="text-[#d4af37] text-xl" />
              <span className=" text-lg">01018881050</span>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-3 space-x-reverse">
              <FaEnvelope className="text-[#d4af37] text-xl" />
              <span className=" text-lg">Almajdrealstate@gmail.com</span>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-3 space-x-reverse">
              <FaMapMarkerAlt className="text-[#d4af37] text-xl" />
              <span className=" text-lg">القاهرة، مصر</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-600 pt-8 flex justify-center items-center">
        <div className="text-lg mb-4 md:mb-0">
          © 2025 شركة المجد للعقارات. جميع الحقوق محفوظة
        </div>
      </div>
    </div>
  );
};

export default Footer;
