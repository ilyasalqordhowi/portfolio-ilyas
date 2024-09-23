import React from "react";
import ImgGif from "../img/imageAbout.gif";

function About() {
  return (
    <div className="md:flex md:flex-row flex flex-col w-full justify-center items-center p-20 gap-20 bg-black">
      <div className="w-full flex justify-center items-center">
        <img src={ImgGif} alt="" />
      </div>
      <div className="w-full text-white">
        <h1 className="font-bold text-[30px]">ABOUT ME</h1>
        <p>
          I’m Ilyas, a passionate Fullstack Web Developer with a keen interest
          in building seamless, dynamic, and responsive web applications. With
          expertise in both front-end and back-end development, I blend
          programming logic with intuitive design to deliver user-centered
          digital experiences. I have hands-on experience with technologies such
          as Golang, Node.js, PostgreSQL, React.js, and Tailwind CSS. I’m
          currently working on a project called SnagTick, a web-based ticketing
          platform, where I manage backend development with a focus on
          efficiency and scalability. With a background in science and a deep
          passion for web development, I’m always eager to explore new
          technologies and continually enhance my skills. Additionally, my
          interest in design and photography gives me a unique perspective when
          crafting visually appealing and user-friendly interfaces. I’m excited
          to keep growing in the field of web development and look forward to
          joining an innovative team to create inspiring digital solutions.
        </p>
      </div>
    </div>
  );
}
export default About;
