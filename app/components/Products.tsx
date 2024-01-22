import React from "react";
import Logo from "../../public/images/logo.png"
import Image from "next/image";

const Products: React.FC = () => {
  return (
    <div className="w-10/12 mx-auto pt-10 pb-20">
      <div className=" pb-20 text-center text-orange-600  font-medium uppercase">
        Products
        <div className="text-center">
          <span className="inline-block w-1 h-1 rounded-full bg-orange-600 ml-1"></span>
          <span className="inline-block w-3 h-1 rounded-full bg-orange-600 ml-1"></span>
          <span className="inline-block w-40 h-1 rounded-full bg-orange-600 ml-1"></span>
          <span className="inline-block w-3 h-1 rounded-full bg-orange-600 ml-1"></span>
          <span className="inline-block w-1 h-1 rounded-full bg-orange-600 ml-1"></span>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-5">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />  <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

const ProductCard: React.FC = () => {
  return (
    <div className="rounded-lg border border-[#ffffff1d] p-5 ">
      <div className="w-full h-52 rounded-lg border border-[#ffffff1d] flex items-center justify-center">
        <Image src={Logo} alt="hevomax logo" width={150} />
      </div>
      <div className="mt-5 text-white">
        <h4 className="text-xl">Products</h4>
        <p className="text-sm text-gray-200 my-3">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt cumque,
          quos, molestias assumenda similique cupiditate autem sapiente dolorem
        </p>
        <span className="text-sm font-medium mt-3">500 RS</span>
      </div>
    </div>
  );
};

export default Products;
