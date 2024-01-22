import Image from "next/image";
import React from "react";
import Team from "../../public/images/team.jpeg";

const About: React.FC = () => {
  return (
    <div className="w-10/12 mx-auto py-20 text-white">
      <div className="flex gap-9 items-center">
        <div className="team flex-1 h-96 overflow-hidden rounded-lg">
          <Image src={Team} alt="team" className="w-full" />
        </div>
        <div className="w-1/3 flex gap-5 flex-col text-sm">
          <div>
          <div className=" pb-10 text-center text-orange-600  font-medium uppercase">
            About Us
            <div className="text-center">
              <span className="inline-block w-1 h-1 rounded-full bg-orange-600 ml-1"></span>
              <span className="inline-block w-3 h-1 rounded-full bg-orange-600 ml-1"></span>
              <span className="inline-block w-40 h-1 rounded-full bg-orange-600 ml-1"></span>
              <span className="inline-block w-3 h-1 rounded-full bg-orange-600 ml-1"></span>
              <span className="inline-block w-1 h-1 rounded-full bg-orange-600 ml-1"></span>
            </div>
          </div>
          <h2 className="text-3xl ">
            Small team, 
            <span className="text-orange-600 font-bold"> Big hearts.</span>
          </h2>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
            blanditiis officiis molestias debitis deleniti, eius totam nobis
            recusandae. Iusto, veritatis.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa
            distinctio magni, cum nisi expedita inventore iusto adipisci commodi
            odio quas assumenda minus voluptate, quo, et animi sequi mollitia.
            Eaque, iusto!
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa
            distinctio magni, cum nisi expedita inventore iusto adipisci commodi
            odio quas assumenda minus voluptate, quo, et animi sequi mollitia.
            Eaque, iusto!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
