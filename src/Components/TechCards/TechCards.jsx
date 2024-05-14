import React, { useEffect } from "react";
import * as IconsImages from "../../Assets/IconsAndImages";
import ScrollReveal from "scrollreveal";
function TechCards() {
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
      <section clasNames="py-12 bg-gray-900 text-gray-100 sm:py-16 lg:py-20">
        <div className="my-12 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center xl:max-w-2xl">
            <h2 className="text-white text-3xl font-bold font-[Fahkwang] leading-tight sm:text-4xl xl:text-5xl font-pj reveal-element">
              Technologies Used
            </h2>
          </div>

          <div className="grid max-w-4xl lg:max-w-6xl grid-cols-1 mx-auto mt-8 text-center gap-y-4 sm:gap-x-8 sm:grid-cols-2 lg:grid-cols-3 sm:mt-12 lg:mt-20 sm:text-left">
            <div className="overflow-hidden bg-gray-800 shadow-md rounded-xl text-center reveal-element">
              <div className="p-9">
                <p className="text-4xl flex justify-center items-center">
                  <img
                    src={IconsImages.YOLOV3}
                    className="w-52 h-40 object-center"
                  />
                </p>
                <h3 className="text-white mt-6 text-2xl font-[Fahkwang] font-bold sm:mt-10 font-pj">
                  YOLO v3
                </h3>
                {/* <h3 className="mt-6 text-2xl font-bold sm:mt-10 font-pj">
                  License Plate Detection in Images
                </h3> */}
                <p className="mt-6 text-base text-gray-300 font-pj font-[Montserrat]">
                  State-of-the-art real-time object detection system utilizing a
                  single-pass approach for efficient computation. Predicts
                  bounding boxes and class probabilities for accurate license
                  plate detection.
                </p>
              </div>
            </div>

            <div className="relative text-center reveal-element">
              <div className="absolute -inset-1">
                <div className="w-full h-full rotate-180 opacity-30 blur-lg filter   bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600"></div>
              </div>
              <div className="relative overflow-hidden bg-gray-800 shadow-md rounded-xl h-full">
                <div className="p-9">
                  <p className="text-4xl flex justify-center items-center">
                    <img
                      src={IconsImages.YOLOV8}
                      className="w-52 h-40 object-center"
                    />
                  </p>
                  <h3 className="text-white mt-6 text-2xl font-bold font-[Fahkwang] sm:mt-10 font-pj">
                    YOLO v8
                  </h3>
                  {/* <h3 className="mt-6 text-2xl font-bold sm:mt-10 font-pj">
                    Enhanced License Plate Detection in Dynamic Scenarios
                  </h3> */}
                  <p className="mt-6 text-base text-gray-300 font-pj font-[Montserrat]">
                    Extension of YOLO optimized for video processing, ensuring
                    temporal consistency and efficient video analysis for
                    tracking moving objects and maintaining accuracy in license
                    plate recognition.
                  </p>
                </div>
              </div>
            </div>

            <div className="overflow-hidden bg-gray-800 shadow-md rounded-xl text-center reveal-element">
              <div className="p-9">
                <p className="text-4xl flex justify-center items-center">
                  <img
                    src={IconsImages.EasyOCR}
                    className="w-52 h-40 object-center"
                  />
                </p>
                <h3 className="text-white mt-6 text-2xl font-bold font-[Fahkwang] sm:mt-10 font-pj">
                  EasyOCR
                </h3>
                {/* <h3 className="mt-6 text-2xl font-bold sm:mt-10 font-pj">
                  Real-time Text Extraction in Dynamic Scenes
                </h3> */}
                <p className="mt-6 text-base text-gray-300 font-pj font-[Montserrat]">
                  Optimized for real-time processing of video frames, ensuring
                  accurate text extraction even in motion. Seamless integration
                  with YOLO v8 for simultaneous extraction from dynamically
                  changing scenes.
                </p>
              </div>
            </div>

            <div className="relative text-center reveal-element">
              <div className="absolute -inset-1">
                <div className="w-full h-full rotate-180 opacity-30 blur-lg filter   bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600"></div>
              </div>
              <div className="relative overflow-hidden bg-gray-800 shadow-md rounded-xl h-full">
                <div className="p-9">
                  <p className="text-4xl flex justify-center items-center">
                    <img
                      src={IconsImages.TrOCR}
                      className="w-52 h-40 object-center"
                    />
                  </p>
                  <h3 className="text-white mt-6 text-2xl font-bold font-[Fahkwang] sm:mt-10 font-pj">
                    Microsoft TrOCR
                  </h3>
                  {/* <h3 className="mt-6 text-2xl font-bold sm:mt-10 font-pj">
                    Precise Extraction of License Plate Details
                  </h3> */}
                  <p className="mt-6 text-base text-gray-300 font-pj font-[Montserrat]">
                    Transformer-Based Optical Character Recognition designed for
                    accurate character recognition and adaptability to image
                    variability. Seamlessly integrates with object detection for
                    cohesive workflow.
                  </p>
                </div>
              </div>
            </div>

            <div className="overflow-hidden bg-gray-800 shadow-md rounded-xl text-center reveal-element">
              <div className="p-9">
                <p className="text-4xl flex justify-center items-center">
                  <img
                    src={IconsImages.ReactJS}
                    className="w-52 h-40 object-center"
                  />
                </p>
                <h3 className="text-white mt-6 text-2xl font-bold font-[Fahkwang] sm:mt-10 font-pj">
                  React JS
                </h3>
                {/* <h3 className="mt-6 text-2xl font-bold sm:mt-10 font-pj">
                  Creating an Interactive User Interface
                </h3> */}
                <p className="mt-6 text-base text-gray-300 font-pj font-[Montserrat]">
                  Powerful JavaScript library for building user interfaces.
                  Utilizes a component-based architecture for creating modular,
                  reusable components, ensuring a responsive and interactive
                  user interface.
                </p>
              </div>
            </div>

            <div className="overflow-hidden bg-gray-800 shadow-md rounded-xl text-center reveal-element">
              <div className="p-9">
                <p className="text-4xl flex justify-center items-center">
                  <img
                    src={IconsImages.Tailwind}
                    className="w-52 h-40 object-center"
                  />
                </p>
                <h3 className="text-white mt-6 text-2xl font-bold font-[Fahkwang] sm:mt-10 font-pj">
                  Tailwind CSS
                </h3>
                {/* <h3 className="mt-6 text-2xl font-bold sm:mt-10 font-pj">
                  Efficient Styling for UI Components
                </h3> */}
                <p className="mt-6 text-base text-gray-300 font-pj font-[Montserrat]">
                  A utility-first CSS framework that streamlines the styling
                  process. Tailwind CSS enables efficient styling for UI
                  components through pre-defined utility classes, promoting
                  consistency and rapid development.
                </p>
              </div>
            </div>

            <div className="relative text-center reveal-element">
              <div className="absolute -inset-1">
                <div className="w-full h-full rotate-180 opacity-30 blur-lg filter   bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600"></div>
              </div>
              <div className="relative overflow-hidden bg-gray-800 shadow-md rounded-xl h-full">
                <div className="p-9">
                  <p className="text-4xl flex justify-center items-center">
                    <img
                      src={IconsImages.ExpressJS}
                      className="w-52 h-40 object-center"
                    />
                  </p>
                  <h3 className="text-white mt-6 text-2xl font-bold font-[Fahkwang] sm:mt-10 font-pj">
                    Node JS & Express JS
                  </h3>
                  {/* <h3 className="mt-6 text-2xl font-bold sm:mt-10 font-pj">
                    Building RESTful APIs
                  </h3> */}
                  <p className="mt-6 text-base text-gray-300 font-pj font-[Montserrat]">
                    Node.js for server-side development and Express.js as a web
                    application framework. Together, they form a robust backend
                    foundation for building RESTful APIs facilitating
                    communication between frontend and backend.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative text-center reveal-element">
              <div className="absolute -inset-1">
                <div className="w-full h-full rotate-180 opacity-30 blur-lg filter   bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600"></div>
              </div>
              <div className="relative overflow-hidden bg-gray-800 shadow-md rounded-xl h-full">
                <div className="p-9">
                  <p className="text-4xl flex justify-center items-center">
                    <img
                      src={IconsImages.PostgreSQL}
                      className="w-52 h-40 object-center"
                    />
                  </p>
                  <h3 className="text-white mt-6 text-2xl font-bold font-[Fahkwang] sm:mt-10 font-pj">
                    PostgreSQL
                  </h3>
                  {/* <h3 className="mt-6 text-2xl font-bold sm:mt-10 font-pj">
                    Storing Data
                  </h3> */}
                  <p className="mt-6 text-base text-gray-300 font-pj font-[Montserrat]">
                    PostgreSQL is a powerful, open-source relational database
                    management system known for its reliability, robustness, and
                    extensive features. It provides ACID compliance and supports
                    complex queries, transactions, and concurrency.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative text-center reveal-element">
              <div className="absolute -inset-1">
                <div className="w-full h-full rotate-180 opacity-30 blur-lg filter   bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600"></div>
              </div>
              <div className="relative overflow-hidden bg-gray-800 shadow-md rounded-xl h-full">
                <div className="p-9">
                  <p className="text-4xl flex justify-center items-center">
                    <img
                      src={IconsImages.Prisma}
                      className="w-52 h-40 object-center"
                    />
                  </p>
                  <h3 className="text-white mt-6 text-2xl font-bold font-[Fahkwang] sm:mt-10 font-pj">
                    Prisma
                  </h3>
                  {/* <h3 className="mt-6 text-2xl font-bold sm:mt-10 font-pj">
                    Storing Data
                  </h3> */}
                  <p className="mt-6 text-base text-gray-300 font-pj font-[Montserrat]">
                    Prisma is a modern database toolkit designed to simplify
                    database workflows and improve developer productivity. It
                    provides an ORM (Object-Relational Mapping) layer for
                    interacting with databases, enabling type-safe database
                    access and schema migrations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TechCards;
