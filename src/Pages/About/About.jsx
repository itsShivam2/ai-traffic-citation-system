import React, { useEffect } from "react";
import Layout from "../../Components/Layout/Layout";
import * as IconsAndImages from "../../Assets/IconsAndImages";
import { OurVision, OurMission, Team } from "./Components/Index";
import ScrollReveal from "scrollreveal";
function About() {
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
    <div>
      <Layout>
        <div className="bg-[#111827]">
          <h1 className="text-[4rem] sm:text-[6rem] text-white font-[Fahkwang] text-left md:text-center px-8 pt-8 reveal-element">
            About Us
          </h1>
          <hr className="border-t border-gray-100 mx-8" />

          <div
            className="w-full bg-center bg-cover h-[34rem]"
          >
            <div className="flex items-center justify-center w-full h-full bg-gray-900/40">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-4xl font-semibold font-[Fahkwang] text-white lg:text-5xl">
                  Our <span className="text-blue-400">Founding Story</span>
                </h1>
                <p className="w-full sm:w-4/5 px-5 py-2 mt-4 text-sm font-medium text-white text-center capitalize">
                  <p className="text-base font-[Montserrat] text-gray-300 lg:w-[95%]">
                    At the heart of our website lies a shared vision — a vision
                    born out of the necessity to confront the escalating
                    challenges in modern traffic management. The persistent
                    surge in traffic incidents and violations acted as a
                    catalyst for our collective determination. Faced with this
                    growing urgency, our team embarked on a purposeful journey,
                    committed to crafting a transformative solution that would
                    transcend the conventional norms of road safety.
                  </p>
                  <p className="text-base font-medium font-[Montserrat] text-gray-300 lg:w-[95%]">
                    This journey led us to the creation of an innovative
                    Echallan system. More than a mere tool for detecting and
                    penalizing offenders, it became a symbol of our dedication
                    to fostering a culture of compliance and safety on the
                    roads. The overwhelming complexity of traffic management
                    became an opportunity for us to contribute to a safer, more
                    responsible road environment. Today, [Your Website Name]
                    stands as a testament to our enduring commitment to shaping
                    a better and safer future for all road users.
                  </p>
                </p>
              </div>
            </div>
          </div>

          <OurVision />
          <OurMission />
          <Team />
        </div>
      </Layout>
    </div>
  );
}

export default About;
