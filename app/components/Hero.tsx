const Hero:React.FC = () => {
  return (
    <div className="w-10/12 mx-auto py-11 h-screen flex items-center justify-center ">
      <div>
        {" "}
        <h1 className="text-6xl text-center text-white font-medium leading-tight">
          <span className="text-orange-600 font-semibold">Superior</span>{" "}
          Lubrication for <br /> Peak{" "}
          <span className="text-orange-600 font-semibold">Performance.</span>
        </h1>
        <p className="text-[20px] text-[#ffffffda] text-center mx-auto w-4/5 mt-5">
          Unlock a smoother journey with our high-performance lubricant oils,
          seamlessly integrating with your engine. Our commitment to excellence
          extends to a robust support system, elevating your driving experience
          with precision lubrication.
        </p>
        <div className="flex justify-center mt-16">
          <button className="bg-orange-600 text-white py-2 px-9 rounded-lg outline-none font-medium">
            Let&apos;s Connect
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
