import React,{useEffect} from "react";
import * as IconsAndImages from "../../../Assets/IconsAndImages";
import ScrollReveal from "scrollreveal";
function OurVision() {
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
      <section className="py-12 bg-gray-900 text-gray-100 sm:py-16 lg:py-20 reveal-element">
        <div className="px-4 mx-auto container">
          <div className="grid grid-cols-1 lg:items-center gap-y-8 lg:grid-cols-2 md:gap-y-16 lg:gap-x-16">
            <div>
              <div className="lg:text-left">
                <h2 className="text-3xl font-bold font-[Fahkwang] sm:text-4xl xl:text-4xl font-pj">
                  Our Vision
                </h2>
                <p className="mt-4 text-base font-[Montserrat] leading-7 text-gray-300 font-pj sm:mt-8">
                  Our vision extends beyond the present — we envision a future
                  where technology seamlessly integrates with road safety. We
                  aim to be at the forefront of this evolution, utilizing
                  cutting-edge technologies to shape a new era of efficient
                  traffic management, community engagement, and road safety
                  initiatives
                  <strong>THAT'S US!</strong>
                </p>
              </div>
              <div className="relative w-fit mt-8 sm:mt-12">
                <div className="absolute -inset-5">
                  <div className="w-full h-full max-w-sm mx-auto lg:mx-0 opacity-30 blur-lg filter bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600"></div>
                </div>
                <a
                  href="#"
                  title=""
                  className="relative z-10 inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold font-[Fahkwang] text-white transition-all duration-200 bg-gray-900 border-2 border-transparent sm:w-auto rounded-xl font-pj hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  role="button"
                >
                  Know More
                </a>
              </div>
            </div>

            <div>
              <div className="relative mx-auto">
                <div className="lg:max-w-6xl lg:mx-auto">
                  <div className="mx-auto w-fit relative group sm:mt-12 lg:mx-0">
                    <div className="absolute opacity-70 -inset-px rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 duration-200 bg-gradient-to-r from-yellow-400 via-pink-500 to-blue-400"></div>
                    {/* <video
                      autoplay
                      muted
                      loop
                      className="feature__img inline-flex items-center justify-center text-base font-bold text-white px-1 py-1 bg-gray-900 border-transparent relative z-10 leading-7 transition-all duration-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-600 focus:ring-offset-[#FFE942] origin-left rotate-2"
                    >
                      <source
                        src={IconsAndImages.IshqJaisa}
                        type="video/mp4"
                      ></source>
                    </video> */}
                     <img
                      src={IconsAndImages.About2}
                      className="feature__img inline-flex items-center justify-center text-base font-bold text-white px-1 py-1 bg-gray-900 border-transparent relative z-10 leading-7 transition-all duration-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-600 focus:ring-offset-[#FFE942] origin-left rotate-2"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default OurVision;
