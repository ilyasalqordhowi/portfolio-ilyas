import React from "react";
import People from "../img/people.png";

function HomeCover() {
  return (
    <div className="md:flex md:flex-row flex flex-col-reverse w-full justify-center items-center p-20 gap-20 bg-black">
      <div className="flex flex-col w-full">
        <h1 className="font-bold text-white text-[30px]">I'M</h1>
        <h2 className="font-bold text-white text-[50px] bg-violet-800 p-5 flex items-center rounded-2xl">
          M.Ilyas Nazhif Azhar Al Qordhowi
        </h2>
        <h3 className="font-bold text-violet-600 text-[50px]">Fullstack Web</h3>
        <h4 className="font-bold text-violet-300 text-[50px]">Developer</h4>
        <p className="text-white text-[15px] text-balance">
          Fullstack Web Developer crafting seamless, responsive, and dynamic web
          applications with a user-centered approach. Blending back-end
          efficiency with front-end creativity, I design and develop captivating
          digital experiences that prioritize performance, accessibility, and
          intuitive user interactions.
        </p>
      </div>
      <div className="flex relative justify-center items-center w-full">
        <img src={People} alt="profile" />
        <div className="bg-gradient-to-t from-violet-500/20 to-fuchsia-500/0 w-full h-full absolute rounded-3xl"></div>
      </div>
    </div>
  );
}
export default HomeCover;
