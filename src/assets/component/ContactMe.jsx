import React from "react";
import People from "../img/people.png";
import { FaPhone, FaEnvelope, FaLocationArrow } from "react-icons/fa";

function ContactMe() {
  return (
    <div className="flex flex-col w-full justify-center items-center p-10 md:p-10 gap-5 md:gap-10 text-white bg-black">
      <h1 className="text-[24px] md:text-[36px] font-bold">CONTACT ME</h1>
      <h2 className="text-[20px] md:text-[28px]">
        Let's make something together
      </h2>
      <p className="text-center text-[14px] md:text-[16px] md:w-3/4 lg:w-1/2 mx-auto">
        Connect with us effortlessly! Click the "Contact Me" button to reach out
        and let's discuss how we can transform your digital experiences into
        unforgettable journeys.
      </p>
      <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-40 items-center w-full mt-10">
        <img
          src={People}
          alt="profile"
          className="brightness-50 w-[200px] md:w-[300px] rounded-full object-cover"
        />
        <div className="flex flex-col items-center justify-center gap-5">
          <h1 className="text-[24px] md:text-[30px] font-serif text-violet-500">
            Personal Details
          </h1>
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="flex items-center gap-3">
              <FaPhone />
              <h2 className="text-[16px] md:text-[18px]">Phone:</h2>
            </div>
            <h1 className="text-[16px] md:text-[18px]">+62 888 0686 4985</h1>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="flex items-center gap-3">
              <FaEnvelope />
              <h2 className="text-[16px] md:text-[18px]">Email:</h2>
            </div>
            <h1 className="text-[16px] md:text-[18px]">@ilyasalqordhowi</h1>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <h2 className="text-[16px] md:text-[18px]">Address:</h2>
            </div>
            <h1 className="text-[16px] md:text-[18px] text-center">
              Gondang, Sragen, Central Java, Indonesia
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
