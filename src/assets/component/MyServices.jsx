import React from "react";
import LogoFullstack from "../img/fullstack.png";
import LogoFrontend from "../img/frontend.png";
import LogoResponsive from "../img/responsive.png";

function MyServices() {
  return (
    <div className="flex flex-col w-full justify-center items-center p-10 md:p-10 gap-10 text-white bg-black">
      <h1 className="font-bold text-[24px] md:text-[32px] lg:text-[40px]">
        MY SERVICES
      </h1>
      <h2 className="font-bold text-[20px] md:text-[30px] lg:text-[40px] text-center">
        The services I provide
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-10 justify-items-center">
        <div className="flex flex-col md:flex-row items-center gap-5 md:gap-10 w-full md:w-2/3 bg-white hover:bg-violet-200 p-5 rounded-xl">
          <div className="w-24 h-24 md:w-32 md:h-32">
            <img
              src={LogoFullstack}
              alt="logoFullstack"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-full md:w-2/3">
            <h3 className="text-violet-800 text-[20px] md:text-[25px] lg:text-[30px]">
              Fullstack Web Development
            </h3>
            <p className="text-black text-[14px] md:text-[16px]">
              I offer comprehensive web development services, covering both
              front-end and back-end. From building interactive user interfaces
              to designing robust server-side logic, I ensure your web
              applications are fast, scalable, and user-friendly.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-5 md:gap-10 w-full md:w-2/3 bg-white hover:bg-violet-200 p-5 rounded-xl">
          <div className="w-24 h-24 md:w-32 md:h-32">
            <img
              src={LogoFrontend}
              alt="logoFrontend"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-full md:w-2/3">
            <h3 className="text-violet-800 text-[20px] md:text-[25px] lg:text-[30px]">
              Front-End Development
            </h3>
            <p className="text-black text-[14px] md:text-[16px]">
              Using modern frameworks like React.js and styling with Tailwind
              CSS, I create responsive and visually appealing interfaces that
              provide an engaging and intuitive experience for users.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-5 md:gap-10 w-full md:w-2/3 bg-white hover:bg-violet-200 p-5 rounded-xl">
          <div className="w-24 h-24 md:w-32 md:h-32">
            <img
              src={LogoFullstack}
              alt="logoFullstack"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-full md:w-2/3">
            <h3 className="text-violet-800 text-[20px] md:text-[25px] lg:text-[30px]">
              Back-End Development
            </h3>
            <p className="text-black text-[14px] md:text-[16px]">
              With expertise in Golang, Node.js, and PostgreSQL, I build
              efficient and secure backend systems that can handle complex
              business logic, database management, and API integrations.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-5 md:gap-10 w-full md:w-2/3 bg-white hover:bg-violet-200 p-5 rounded-xl">
          <div className="w-24 h-24 md:w-32 md:h-32">
            <img
              src={LogoResponsive}
              alt="logoResponsive"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-full md:w-2/3">
            <h3 className="text-violet-800 text-[20px] md:text-[25px] lg:text-[30px]">
              Responsive Web Design
            </h3>
            <p className="text-black text-[14px] md:text-[16px]">
              Leveraging my knowledge in UI/UX, I craft websites that adapt
              seamlessly to any device, ensuring a consistent experience across
              desktops, tablets, and mobile phones.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyServices;
