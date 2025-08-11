import React from "react";
import bg from "../../assets/bg.jpg";
const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition:'center'
      }}
      className="relative h-[18rem] flex items-center">
      <div className="absolute z-10 inset-0 opacity-75 bg-[#141f39]"></div>
      <div className="relative z-40 px-4 md:px-12 text-white">
        <h2 className="font-montserrat font-semibold md:font-normal text-[1.4rem] md:text-[60px] ">
          Online Shop Experience Review App
        </h2>
        <p className="md:font-semibold mt-4 text-gray-300 leading-7 text-base md:text-lg">
          Easily share your online shopping experience by submitting reviews
          with ratings, and browse feedback from others
        </p>
      </div>
    </div>
  );
};

export default Banner;
