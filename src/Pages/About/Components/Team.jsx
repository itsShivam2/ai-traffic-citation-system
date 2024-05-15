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
        {/*  */}
        <div className="container mx-auto px-6 mb-16 md:px-12 xl:px-32">
          <div className="mb-8">
            <h2 className="mb-4 text-center text-5xl font-bold font-[Fahkwang] text-gray-100 md:text-6xl">
              Project Supervisor
            </h2>
          </div>
          <div className="flex items-center justify-center">
            <div className="space-y-4 text-center">
              <div>
                <h4 className="text-3xl text-white font-[Fahkwang]">
                  Rohit Kumar Tiwari
                </h4>
                <span className="block text-lg text-gray-100 font-[Montserrat]">
                  (Associate Professor) <br/> Comuter Science & Enginnering Department
                </span>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="container mx-auto px-6 md:px-12 xl:px-32">
          <div className="mb-8">
            <h2 className="mb-4 text-center text-5xl font-bold font-[Fahkwang] text-gray-100 md:text-6xl">
              Team
            </h2>
          </div>
          <div className="grid items-center gap-12 md:grid-cols-3">
            <div className="space-y-4 text-center">
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
