import React from "react";

function Statistics() {
  return (
    <div>
      <div className="bg-[#111827] pt-16 pr-4 pb-16 pl-4 mr-auto ml-auto md:px-24 lg:px-8 lg:py-20">
        <div className="bg-[#111827] mr-auto ml-auto lg:max-w-screen-xl sm:max-w-xl md:max-w-full">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/*001*/}
            <div className="text-center">
              <div
                className="flex items-center justify-center w-10 mt-0 mr-auto mb-3 ml-auto rounded-full bg-blue-700 gap-8
                  sm:w-12 sm:h-12"
              >
                <span>
                  <svg
                    className="w-8 h-8 text-white sm:w-10 sm:h-10"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23
                      39 38 23 27 23"
                    />
                  </svg>
                </span>
              </div>
              <p className="text-center text-4xl mb-2 font-bold text-white">
                819
              </p>
              <p className="text-center text-md mb-2 font-bold text-white">
                Users
              </p>
              {/* <p className="text-center text-gray-700">
                It’s something that many of the wisest people in history have
                kept in mind.
              </p> */}
            </div>
            {/*001*/}
            {/*002*/}
            <div className="text-center">
              <div
                className="flex items-center justify-center w-10 mt-0 mr-auto mb-3 ml-auto rounded-full bg-blue-700 gap-8
                  sm:w-12 sm:h-12"
              >
                <span>
                  <svg
                    className="w-8 h-8 text-white sm:w-10 sm:h-10"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23
                      39 38 23 27 23"
                    />
                  </svg>
                </span>
              </div>
              <p className="text-center text-4xl mb-2 font-bold text-white">
                1.3K
              </p>
              <p className="text-center text-md mb-2 font-bold text-white">
                Challan
              </p>
            </div>
            {/*002*/}
            {/*003*/}
            <div className="text-center">
              <div
                className="flex items-center justify-center w-10 mt-0 mr-auto mb-3 ml-auto rounded-full bg-blue-700 gap-8
                  sm:w-12 sm:h-12"
              >
                <span>
                  <svg
                    className="w-8 h-8 text-white sm:w-10 sm:h-10"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23
                      39 38 23 27 23"
                    />
                  </svg>
                </span>
              </div>
              <p className="text-center text-4xl mb-2 font-bold text-white">
                91
              </p>
              <p className="text-center text-md mb-2 font-bold text-white">
                Paid
              </p>
            </div>
            <div className="text-center">
              <div
                className="flex items-center justify-center w-10 mt-0 mr-auto mb-3 ml-auto rounded-full bg-blue-700 gap-8
                  sm:w-12 sm:h-12"
              >
                <span>
                  <svg
                    className="w-8 h-8 text-white sm:w-10 sm:h-10"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23
                      39 38 23 27 23"
                    />
                  </svg>
                </span>
              </div>
              <p className="text-center text-4xl mb-2 font-bold text-white">
                52
              </p>
              <p className="text-center text-md mb-2 font-bold text-white">
                Pending
              </p>
            </div>
            {/*004*/}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Statistics;
