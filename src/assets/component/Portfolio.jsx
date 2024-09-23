import React from "react";
import portfolioSnagtick from "../img/portfolioSnagtick.png";
import portfolioKonis from "../img/portfolioKonis.png";

function Portfolio() {
  return (
    <div className="flex flex-col w-full justify-center p-10 md:p-10 gap-5 text-white bg-black">
      <h1 className="font-bold text-[24px] md:text-[32px]">PORTFOLIO</h1>
      <h2 className="font-bold text-[30px] md:text-[50px]">Latest Projects</h2>
      <p className="text-[14px] md:text-[16px] text-center md:w-3/4 lg:w-1/2 mx-auto">
        Explore the captivating world of cutting-edge fullstack development.
        Redefining digital experiences through innovative front-end and back-end
        solutions, I showcase powerful, scalable applications and inspire
        seamless user interactions that push boundaries in web development.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 justify-items-center items-center w-full mt-10">
        <a href="http://103.93.58.89:20203">
          <div className="flex flex-col items-center gap-5">
            <div className="bg-white p-5 rounded-xl w-[250px] h-[250px] md:w-[300px] md:h-[300px]">
              <img
                src={portfolioSnagtick}
                alt="SnagTick Portfolio"
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="font-bold text-white text-[20px] md:text-[30px] hover:underline hover:decoration-violet-500 hover:decoration-4 hover:underline-offset-8">
              SnagTick
            </h3>
          </div>
        </a>
        <a href="http://103.93.58.89:23231">
          <div className="flex flex-col items-center gap-5">
            <div className="bg-white p-5 rounded-xl w-[250px] h-[250px] md:w-[300px] md:h-[300px]">
              <img
                src={portfolioKonis}
                alt="Konis Portfolio"
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="font-bold text-white text-[20px] md:text-[30px] hover:underline hover:decoration-violet-500 hover:decoration-4 hover:underline-offset-8">
              Konis
            </h3>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Portfolio;
