import React from "react";
import Nav from "./componant/navbar/Nav";
import Home from "./componant/home/Home";
import Service from "./componant/service/Service";
import WhyUs from "./componant/why-us/WhyUs";
import Contact from "./componant/contact/Contact";
import Footer from "./componant/footer/Footer";
import About from "./componant/about/About";

const App = () => {
  return (
    <div className="bg-[#2c3e50]">
      <Nav />
      <Home />
      <About />
      <Service />
      <WhyUs />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
