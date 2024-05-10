import React, { useEffect } from "react";
import * as IconsImages from "../../../Assets/IconsAndImages";
import ScrollReveal from "scrollreveal";
function Team() {
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
    <div className="reveal-element">
      <div className="bg-[#111827] dark:bg-gray-800 py-20">
        <div className="container mx-auto px-6 md:px-12 xl:px-32">
          <div className="mb-16">
            <h2 className="mb-4 text-center text-5xl font-bold font-[Fahkwang] text-gray-100 md:text-6xl">
              Team
            </h2>
            <p className="text-gray-100 font-[Montserrat] dark:text-gray-300 lg:mx-auto lg:w-8/12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="grid items-center gap-12 md:grid-cols-3">
            <div className="space-y-4 text-center">
              <img
                className="mx-auto h-64 w-64 rounded-xl object-cover md:h-40 md:w-40 lg:h-64 lg:w-64"
                src={IconsImages.Team}
                alt="Sanjay Chaurasiya"
                loading="lazy"
                width="640"
                height="805"
              />
              <div>
                <h4 className="text-2xl text-white font-[Fahkwang]">
                  Sanjay Chaurasiya
                </h4>
                <span className="block text-lg text-gray-100 font-[Montserrat]">
                  AI Models
                </span>
              </div>
            </div>
            <div className="space-y-4 text-center">
              <img
                className="mx-auto h-64 w-64 rounded-xl object-cover md:h-64 md:w-48 lg:h-80 lg:w-64"
                src={IconsImages.Team}
                alt="Shardul Sisodiya"
                loading="lazy"
                width="1000"
                height="667"
              />
              <div>
                <h4 className="text-2xl text-white font-[Fahkwang]">
                  Shardul Sisodiya
                </h4>
                <span className="block text-lg text-gray-100 font-[Montserrat]">
                  Backend
                </span>
              </div>
            </div>
            <div className="space-y-4 text-center">
              <img
                className="mx-auto h-64 w-64 rounded-xl object-cover md:h-40 md:w-40 lg:h-64 lg:w-64"
                src={IconsImages.Team}
                alt="Shivam Gupta"
                loading="lazy"
                width="1000"
                height="667"
              />
              <div>
                <h4 className="text-2xl text-white font-[Fahkwang]">
                  Shivam Gupta
                </h4>
                <span className="block text-lg text-gray-100 font-[Montserrat]">
                  Frotend
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
