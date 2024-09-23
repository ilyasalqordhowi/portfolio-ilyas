import React from "react";
import Logo from "../img/logo.png";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="flex flex-col w-full justify-center items-center p-10 md:p-20 gap-10 text-white bg-black">
        <div className="flex items-center justify-center w-20 h-20">
          <img src={Logo} alt="logo" className="w-full h-full object-contain" />
        </div>
        <ul className="flex gap-5 md:gap-10 text-[20px] md:text-[30px]">
          <a href="https://www.facebook.com/people/NzhfAzhr/pfbid0aL1jgroRAW8eDAZS7omgKbkNGPADrHmRGHk6qF8KfB9kQEQUZFX2c4p6up659BNql/">
            <li className="flex items-center gap-2 md:gap-5">
              <FaFacebook />
              <span>ilyasAzhar</span>
            </li>
          </a>
          <a href="https://www.instagram.com/nzhfazhr__/">
            <li className="flex items-center gap-2 md:gap-5">
              <FaInstagram />
              <span>nzhfazhr__</span>
            </li>
          </a>
          <a href="https://www.linkedin.com/in/m-ilyas-nazhif-azhar-al-qordhowi">
            <li className="flex items-center gap-2 md:gap-5">
              <FaLinkedin />
              <span>M. Ilyas Nazhif Azhar Al Qordhowi</span>
            </li>
          </a>
        </ul>
      </div>
      <div className="flex items-center justify-center p-5 bg-violet-800 text-white text-[14px] md:text-[16px]">
        © 2024 Ilyas. All Rights Reserved, Inc.
      </div>
    </>
  );
}

export default Footer;
