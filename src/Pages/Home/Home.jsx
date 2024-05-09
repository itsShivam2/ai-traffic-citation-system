import React from "react";
import * as IconsAndImages from "../../Assets/IconsAndImages";
import Layout from "../../Components/Layout/Layout";
import TechCards from "../../Components/TechCards/TechCards";
function Random() {
  return (
    <div className="bg-[#111827]">
      <Layout>
        {/*  */}
        <div className="relative my-5 pb-6 lg:pb-16 reveal-element">
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
        <div className="text-center bg-[#111827]">
          <p className="max-w-5xl text-white font-bold mx-auto mb-4 text-4xl leading-tight sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight font-pj">
            Unlocking Efficiency: Echallan Solutions
          </p>
          <h1 className="max-w-2xl mx-auto px-6 text-lg text-gray-300 font-inter">
            Transforming Urban Mobility with Real-Time Violation Detection and
            Automated Offender Identification for Smarter, Safer Cities.
          </h1>
          <div className="px-8 sm:items-start sm:justify-center sm:px-0 sm:space-x-5 sm:flex mt-9">
            <a
              href="https://windframe.devwares.com"
              title=""
              className="mb-3 sm:mb-0 inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-800 border-2 border-transparent sm:w-auto rounded-xl font-pj hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              role="button"
            >
              Get Started
            </a>
          </div>
        </div>
        {/*  */}
        <div className="bg-[rgba(44,51,63)] mt-16">
          <div className="flex flex-col gap-10 justify-between w-11/12 max-w-maxContent text-white mx-auto ">
            <div className="grid grid-cols-2 md:grid-cols-4 text-center">
              <div className="flex flex-col py-10">
                <h1 className="text-[30px] font-bold text-richblack-5">5K+</h1>
                <h2 className="font-semibold text-[16px] text-richblack-500">
                  Vehicles Registered
                </h2>
              </div>
              <div className="flex flex-col py-10">
                <h1 className="text-[30px] font-bold text-richblack-5">2K+</h1>
                <h2 className="font-semibold text-[16px] text-richblack-500">
                  Active Users
                </h2>
              </div>
              <div className="flex flex-col py-10">
                <h1 className="text-[30px] font-bold text-richblack-5">10K+</h1>
                <h2 className="font-semibold text-[16px] text-richblack-500">
                  Challans Generated
                </h2>
              </div>
              <div className="flex flex-col py-10">
                <h1 className="text-[30px] font-bold text-richblack-5">7K+</h1>
                <h2 className="font-semibold text-[16px] text-richblack-500">
                  E-payment Challans
                </h2>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <TechCards />
      </Layout>
    </div>
  );
}

export default Random;
