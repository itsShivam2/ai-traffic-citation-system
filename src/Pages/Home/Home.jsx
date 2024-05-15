import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import * as IconsAndImages from "../../Assets/IconsAndImages";
import Layout from "../../Components/Layout/Layout";
import TechCards from "../../Components/TechCards/TechCards";
import ScrollReveal from "scrollreveal";

function Home() {
  useEffect(() => {
    ScrollReveal().reveal(".reveal-element", {
      origin: "bottom",
      distance: "20px",
      duration: 1000,
      delay: 200,
      easing: "ease-in-out",
      reset: true,
    });
  }, []);

  return (
    <div className="bg-[#111827]">
      <Layout>
        {/*  */}
        <div className="relative mb-6 pb-6 lg:pb-16 reveal-element">
          <img
            className="absolute inset-0 w-full h-full object-fit object-top"
            src={IconsAndImages.HeroImage3}
            width="400"
            height="500"
            alt="hero background image"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 w-full h-full bg-purple-900 bg-opacity-30 "
          ></div>
          <div className="relative container m-auto px-6 md:px-12 lg:px-6">
            <div className="mb-12 pt-40 space-y-16 md:mb-20 md:pt-56 lg:w-8/12 lg:mx-auto">
              <div className="text-center">
                {/* <p className="max-w-5xl text-white font-bold mx-auto mb-4 text-4xl leading-tight sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight font-pj">
                  Unlocking Efficiency: Echallan Solutions
                </p> */}
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="text-center bg-[#111827] reveal-element pb-8">
          <p className="max-w-5xl text-white font-bold mx-auto mb-4 text-4xl leading-tight sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight font-pj font-[Fahkwang]">
            Unlocking Efficiency: Echallan Solutions
          </p>
          <h1 className="max-w-2xl mx-auto px-6 text-lg text-gray-300 font-inter font-[Montserrat] reveal-element">
            Transforming Urban Mobility with Real-Time Violation Detection and
            Automated Offender Identification for Smarter, Safer Cities.
          </h1>
        </div>
        <TechCards />
      </Layout>
    </div>
  );
}

export default Home;
