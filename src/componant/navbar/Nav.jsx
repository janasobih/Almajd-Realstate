import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { href: "#home", label: "الرئيسية" },
    { href: "#about", label: "من نحن" },
    { href: "#services", label: "خدماتنا" },
    { href: "#whyus", label: "لماذا نحن" },
    { href: "#contact", label: "اتصل بنا" },
  ];

  return (
    <div
      className="flex justify-between items-center 
                  bg-white
                 text-[#2c3e50] shadow-lg rounded-b-3xl 
                 border-b-4 border-[#d4af37]
                 fixed top-0 left-0 w-full z-50"
    >
      <div className="hidden lg:flex flex-row-reverse gap-12 p-3 ml-6 text-xl font-semibold">
        <a
          href="#home"
          className="hover:text-[#d4af37] transition-all duration-300 transform hover:scale-105 hover:font-bold"
        >
          الرئيسية
        </a>
        <a
          href="#about"
          className="hover:text-[#d4af37] transition-all duration-300 transform hover:scale-105 hover:font-bold"
        >
          من نحن
        </a>
        <a
          href="#services"
          className="hover:text-[#d4af37] transition-all duration-300 transform hover:scale-105 hover:font-bold"
        >
          خدماتنا
        </a>
        <a
          href="#whyus"
          className="hover:text-[#d4af37] transition-all duration-300 transform hover:scale-105 hover:font-bold"
        >
          لماذا نحن
        </a>
        <a
          href="#contact"
          className="hover:text-[#d4af37] transition-all duration-300 transform hover:scale-105 hover:font-bold"
        >
          اتصل بنا
        </a>
      </div>

      <div className="lg:hidden p-3">
        <button
          onClick={toggleMenu}
          className="text-[#2c3e50] hover:text-[#d4af37] transition-all duration-300 p-2"
          aria-label="قائمة التنقل"
        >
          {isMenuOpen ? (
            <FaTimes className="text-2xl" />
          ) : (
            <FaBars className="text-2xl" />
          )}
        </button>
      </div>

      <div className="p-2">
        <img
          src="./logo3.png"
          alt="شعار شركة المجد للعقارات"
          className="w-[18rem] h-[5rem] object-cover drop-shadow-lg"
        />
      </div>

      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-[50%] bg-white/10 backdrop-blur-sm shadow-2xl border-t border-[#d4af37] rounded-b-3xl">
          <div className="flex flex-col p-4 space-y-4">
            <a
              href="#home"
              onClick={closeMenu}
              className="text-white hover:text-[#d4af37] transition-all duration-300 transform hover:scale-105 hover:font-bold text-xl font-semibold py-3 px-4 text-center border-b border-white/20 last:border-b-0 hover:bg-white/10 rounded-lg backdrop-blur-sm"
            >
              الرئيسية
            </a>
            <a
              href="#about"
              onClick={closeMenu}
              className="text-white hover:text-[#d4af37] transition-all duration-300 transform hover:scale-105 hover:font-bold text-xl font-semibold py-3 px-4 text-center border-b border-white/20 last:border-b-0 hover:bg-white/10 rounded-lg backdrop-blur-sm"
            >
              من نحن
            </a>
            <a
              href="#services"
              onClick={closeMenu}
              className="text-white hover:text-[#d4af37] transition-all duration-300 transform hover:scale-105 hover:font-bold text-xl font-semibold py-3 px-4 text-center border-b border-white/20 last:border-b-0 hover:bg-white/10 rounded-lg backdrop-blur-sm"
            >
              خدماتنا
            </a>
            <a
              href="#whyus"
              onClick={closeMenu}
              className="text-white hover:text-[#d4af37] transition-all duration-300 transform hover:scale-105 hover:font-bold text-xl font-semibold py-3 px-4 text-center border-b border-white/20 last:border-b-0 hover:bg-white/10 rounded-lg backdrop-blur-sm"
            >
              لماذا نحن
            </a>
            <a
              href="#contact"
              onClick={closeMenu}
              className="text-white hover:text-[#d4af37] transition-all duration-300 transform hover:scale-105 hover:font-bold text-xl font-semibold py-3 px-4 text-center border-b border-white/20 last:border-b-0 hover:bg-white/10 rounded-lg backdrop-blur-sm"
            >
              اتصل بنا
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;
