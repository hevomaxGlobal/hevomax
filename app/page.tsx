import React from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import Testimonials from "./components/Testimonials";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

const Page:React.FC = () => {
  return (
    <div className="bg-black w-screen overflow-x-hidden">
      <div className="w-screen bg-black min-h-screen bg-hero-nav">
        <div className="pb-7">
          <div className="fixed w-full p-5 rounded-lg bg-[#000000a4] ">
            <Navigation />
          </div>
          <Hero />
        </div>
      </div>
      <About />
      <Products />
      <Testimonials />
      <ContactUs/>
      <Footer/>
    </div>
  );
};

export default Page;
