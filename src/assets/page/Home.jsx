import React from "react";
import Navbar from "../component/navbar";
import { Link } from "react-router-dom";
import HomeCover from "../component/HomeCover";
import About from "../component/About";
import MyServices from "../component/MyServices";
import Portfolio from "../component/Portfolio";
import ContactMe from "../component/ContactMe";
import Footer from "../component/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <section id="home">
        <HomeCover />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="myServices">
        <MyServices />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="contactMe">
        <ContactMe />
      </section>
      <Footer />
    </>
  );
}
export default Home;
