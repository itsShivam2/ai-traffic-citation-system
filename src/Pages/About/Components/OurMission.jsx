import React from "react";
import * as IconsAndImages from "../../../Assets/IconsAndImages";
function OurMission() {
  return (
    <div>
      <section className="py-12 bg-gray-900 text-gray-100 sm:py-16 lg:py-20">
        <div className="px-4 mx-auto container">
          <div className="grid grid-cols-1 lg:items-center gap-y-8 lg:grid-cols-2 md:gap-y-16 lg:gap-x-16">
            <div>
              <div className="relative mx-auto">
                <div className="lg:max-w-6xl lg:mx-auto">
                  <div className=" mx-auto w-fit relative group sm:mt-12 lg:mx-0">
                    <div className="absolute opacity-70 -inset-px rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 duration-200 bg-gradient-to-r from-yellow-400 via-pink-500 to-blue-400"></div>
                    {/* <video
                      autoplay=""
                      muted=""
                      loop=""
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

            <div>
              <div className="lg:text-left">
                <h2 className="text-3xl font-bold sm:text-4xl xl:text-5xl font-pj">
                  Our Mission
                </h2>
                <p className="mt-4 text-base leading-7 text-gray-300 font-pj sm:mt-8">
                  Welcome to our website, where innovation meets road safety.
                  Our mission is to revolutionize traffic management in the face
                  of escalating vehicular density and ensure safer roads for
                  all. We are committed to leveraging cutting-edge technologies
                  to address the challenges posed by the growing population and
                  its impact on road safety and regulation.
                </p>
              </div>
              <div className="relative w-fit mt-8 sm:mt-12">
                <div className="absolute -inset-5">
                  <div className="w-full h-full max-w-sm mx-auto lg:mx-0 opacity-30 blur-lg filter bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600"></div>
                </div>
                <a
                  href="#"
                  className="relative z-10 inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border-2 border-transparent sm:w-auto rounded-xl font-pj hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  role="button"
                  target="_blank"
                  rel="noreferrer"
                >
                  Know More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default OurMission;
