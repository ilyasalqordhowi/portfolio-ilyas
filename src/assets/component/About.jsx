import React from "react";
import ImgGif from "../img/imageAbout.gif";

function About() {
  return (
    <div className="md:flex md:flex-row flex flex-col w-full justify-center items-center p-10 gap-20 bg-black">
      <div className="w-full flex justify-center items-center">
        <img src={ImgGif} alt="" />
      </div>
      <div className="w-full text-[13px] md:text-[20px] text-white">
        <h1 className="font-bold text-[30px]">ABOUT ME</h1>
        <p>
          Ilyas is a dedicated Full-Stack Web Developer with a strong academic
          foundation in science, having completed high school in 2024. During
          his education, he actively engaged in scientific competitions and
          collaborative projects, refining his teamwork and problem-solving
          abilities. At Fazztrack, Ilyas further developed his technical
          expertise, mastering languages like JavaScript and Go. He also gained
          proficiency with frameworks such as React.js, Tailwind, and Gin Gonic,
          as well as containerization tools like Docker.Currently seeking
          flexible remote work opportunities, Ilyas remains committed to
          continuously enhancing his web development skills and contributing to
          dynamic development teams.
        </p>
      </div>
    </div>
  );
}
export default About;
