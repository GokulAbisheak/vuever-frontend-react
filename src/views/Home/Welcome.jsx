import React from "react";
import HomeImg from "../../assets/home/home-bg.jpg";
import logo from "../../assets/logos/text-white.png";

const Welcome = () => {
  return (
    <div className="min-h-[calc(100vh-64px)] w-full">
      <div className="w-full h-[calc(100vh-64px)] relative">
        <img src={HomeImg} className="object-cover w-full h-full" />
        <div className="w-full h-[calc(100vh-64px)] absolute bg-black bg-opacity-75 top-0 flex flex-col items-center justify-center">
          <img src={logo} />
          <a href="#latest">
            <button className="uppercase text-white text-2xl w-[400px] h-[100px] flex items-center justify-center border-[3px] border-white rounded-full mt-[50px] hover:bg-white hover:text-black font-semibold duration-300">
              View Latest Collections
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
