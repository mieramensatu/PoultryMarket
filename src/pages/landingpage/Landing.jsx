import React from "react";
import Navbar from "../../component/Navbar/Navbar";
import HeroComponent from "./hero/hero";
// import Partner from "./partner/partner";
import SmoothScroll from "../../helper/SmoothScroll";
import Footer from "../../component/Footer/footer";

function Landingpage() {
  return (
    <>
      <SmoothScroll />
      <Navbar />
      <div class="home">
        <div class="hero">
          <HeroComponent />
        </div>
        <div class="partner">
        </div>
        <div class="benefit"></div>
        <div class="tim"></div>
        <div class="information"></div>
        <div class="faq"></div>
      </div>
      <Footer/>
    </>
  );
}

export default Landingpage;
