import Image from "next/image";
import React from "react";
import Logo from "../../public/images/logo.png";

const Navigation:React.FC = () => {
  return (
    <div className="flex justify-between w-10/12 mx-auto items-center">
      <div className="logo">
        <Image src={Logo} alt="hevomax logo" width={150} />{" "}
      </div>
      <div className="menu text-sm">
        <ul className="flex gap-5 items-center text-white">
          <li className="py-1 border-b-2 border-transparent hover:border-orange-600 animate">
            <a href="#home">Home</a>
          </li>
          <li className="py-1 border-b-2 border-transparent hover:border-orange-600 animate">
            <a href="#about">About</a>
          </li>
          <li className="py-1 border-b-2 border-transparent hover:border-orange-600 animate">
            <a href="#products">Products</a>
          </li>
          <li className="py-1 border-b-2 border-transparent hover:border-orange-600 animate">
            <a href="#testimonials">Testimonial</a>
          </li>
          <li className="py-1 border-b-2 border-transparent hover:border-orange-600 animate">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
