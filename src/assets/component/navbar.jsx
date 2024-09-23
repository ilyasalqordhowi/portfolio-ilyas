import React from "react";
import Logo from "../img/logo.png";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [navbar, setNavbar] = React.useState(true);
  function btnNav() {
    if (navbar === true) {
      setNavbar(false);
    } else {
      setNavbar(true);
    }
  }
  function handleDownload() {
    const link = document.createElement("a");
    link.href = "/CV-ATS.pdf";
    link.setAttribute("download", "CV_Ilyas.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  return (
    <div className="md:flex md:flex-row flex-col flex w-full justify-center md:justify-between p-10 items-center bg-black">
      <div className="flex items-center md:justify-center justify-between md:w-10 w-full">
        <img src={Logo} alt="logo" className="w-10" />
        <button onClick={btnNav} className="text-white md:hidden flex">
          <FaBars />
        </button>
      </div>
      <div className="md:flex md:flex-row hidden list-none gap-10 items-center text-white">
        <li className="hover:underline hover:decoration-violet-500 hover:decoration-4 hover:underline-offset-8">
          <a href="#home">HOME</a>
        </li>
        <li className="hover:underline hover:decoration-violet-500 hover:decoration-4 hover:underline-offset-8">
          <a href="#about">ABOUT ME</a>
        </li>
        <li className="hover:underline hover:decoration-violet-500 hover:decoration-4 hover:underline-offset-8">
          <a href="#myServices"> MY SERVICES</a>
        </li>

        <li className="hover:underline hover:decoration-violet-500 hover:decoration-4 hover:underline-offset-8">
          <a href="#portfolio">PORTFOLIO</a>
        </li>

        <li className="hover:underline hover:decoration-violet-500 hover:decoration-4 hover:underline-offset-8">
          <a href="#contactMe">CONTACT ME</a>
        </li>
      </div>
      <button
        onClick={handleDownload}
        className="md:flex items-center hidden p-5 bg-violet-600 rounded-full text-white"
      >
        DOWNLOAD CV
      </button>
      <div className={navbar ? "hidden" : "md:hidden"}>
        <div className="md:flex md:flex-row flex-col flex list-none gap-10 items-center text-white">
          <li className="hover:underline hover:decoration-violet-500 hover:decoration-4 hover:underline-offset-8">
            <a href="#home">HOME</a>
          </li>
          <li className="hover:underline hover:decoration-violet-500 hover:decoration-4 hover:underline-offset-8">
            <a href="#about">ABOUT ME</a>
          </li>

          <li className="hover:underline hover:decoration-violet-500 hover:decoration-4 hover:underline-offset-8">
            <a href="#myServices"> MY SERVICES</a>
          </li>

          <li className="hover:underline hover:decoration-violet-500 hover:decoration-4 hover:underline-offset-8">
            <a href="#portfolio">PORTFOLIO</a>
          </li>
          <li className="hover:underline hover:decoration-violet-500 hover:decoration-4 hover:underline-offset-8">
            <a href="#contactMe">CONTACT ME</a>
          </li>
        </div>
        <button
          onClick={handleDownload}
          className="flex items-center p-5 bg-violet-600 rounded-full text-white"
        >
          DOWNLOAD CV
        </button>
      </div>
    </div>
  );
}
export default Navbar;
