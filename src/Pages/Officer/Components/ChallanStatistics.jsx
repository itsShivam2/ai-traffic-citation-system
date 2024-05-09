import React from "react";

function ChallanStatistics() {
  return (
    <div>
      <section className="bg-[#111827] container px-4 mx-auto">
        <div className="flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-[#263658] text-gray-100">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-100"
                      >
                        <div className="flex items-center gap-x-3">
                          <button className="flex items-center gap-x-2">
                            <span>Challan No.</span>
                          </button>
                        </div>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-100"
                      >
                        Date
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-100"
                      >
                        Status
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-100"
                      >
                        User
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-100"
                      >
                        Vehicle No.
                      </th>

                      <th scope="col" className="relative py-3.5 px-4">
                        <span className="sr-only">Actions</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-[#111827]  divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-4 text-sm font-medium text-gray-100  whitespace-nowrap">
                        <div className="inline-flex items-center gap-x-3">
                          <span>#3066</span>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-100 whitespace-nowrap">
                        Jan 6, 2022
                      </td>
                      <td className="px-4 py-4 text-sm font-medium text-gray-100 whitespace-nowrap">
                        <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-white">
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10 3L4.5 8.5L2 6"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>

                          <h2 className="text-sm font-normal">Paid</h2>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        <div className="flex items-center gap-x-2">
                          <img
                            className="object-cover w-8 h-8 rounded-full"
                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                            alt=""
                          />
                          <div>
                            <h2 className="text-sm font-medium text-white">
                              User1
                            </h2>
                            <p className="text-xs font-normal text-gray-100">
                              user1@example.com
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-100 whitespace-nowrap">
                        UP-53 CZ-1234
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <div className="flex items-center gap-x-6">
                          <button className="text-gray-100 transition-colors duration-200 dark:hover:text-indigo-500 dark:text-gray-300 hover:text-indigo-500 focus:outline-none">
                            View
                          </button>

                          <button className="text-blue-500 transition-colors duration-200 hover:text-indigo-500 focus:outline-none">
                            Download
                          </button>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td className="px-4 py-4 text-sm font-medium text-gray-100  whitespace-nowrap">
                        <div className="inline-flex items-center gap-x-3">
                          <span>#3066</span>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-100 whitespace-nowrap">
                        Jan 6, 2022
                      </td>
                      <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                        <div className="inline-flex items-center px-3 py-1 text-red-500 rounded-full gap-x-2 bg-white">
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9 3L3 9M3 3L9 9"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>

                          <h2 className="text-sm font-normal">Cancelled</h2>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        <div className="flex items-center gap-x-2">
                          <img
                            className="object-cover w-8 h-8 rounded-full"
                            src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                            alt=""
                          />
                          <div>
                            <h2 className="text-sm font-medium text-gray-800 dark:text-white ">
                              User2
                            </h2>
                            <p className="text-xs font-normal text-gray-600 dark:text-gray-400">
                              user2@example.com
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-100 whitespace-nowrap">
                        UP-53 CZ-1234
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <div className="flex items-center gap-x-6">
                          <button className="text-gray-100 transition-colors duration-200 hover:text-teal-500 focus:outline-none">
                            Pay
                          </button>

                          <button className="text-blue-500 transition-colors duration-200 hover:text-indigo-500 focus:outline-none">
                            Download
                          </button>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td className="px-4 py-4 text-sm font-medium text-gray-100  whitespace-nowrap">
                        <div className="inline-flex items-center gap-x-3">
                          <span>#3066</span>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-100 whitespace-nowrap">
                        Jan 6, 2022
                      </td>
                      <td className="px-4 py-4 text-sm font-medium text-gray-100 whitespace-nowrap">
                        <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-white">
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10 3L4.5 8.5L2 6"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>

                          <h2 className="text-sm font-normal">Paid</h2>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        <div className="flex items-center gap-x-2">
                          <img
                            className="object-cover w-8 h-8 rounded-full"
                            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80"
                            alt=""
                          />
                          <div>
                            <h2 className="text-sm font-medium text-gray-800 dark:text-white ">
                              Kate Morrison
                            </h2>
                            <p className="text-xs font-normal text-gray-600 dark:text-gray-400">
                              kate@example.com
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-100 whitespace-nowrap">
                        UP-53 CZ-1234
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <div className="flex items-center gap-x-6">
                          <button className="text-gray-100 transition-colors duration-200 dark:hover:text-indigo-500 dark:text-gray-300 hover:text-indigo-500 focus:outline-none">
                            View
                          </button>

                          <button className="text-blue-500 transition-colors duration-200 hover:text-indigo-500 focus:outline-none">
                            Download
                          </button>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td className="px-4 py-4 text-sm font-medium text-gray-100  whitespace-nowrap">
                        <div className="inline-flex items-center gap-x-3">
                          <span>#3066</span>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-100 whitespace-nowrap">
                        Jan 6, 2022
                      </td>
                      <td className="px-4 py-4 text-sm font-medium text-gray-100 whitespace-nowrap">
                        <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-white">
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10 3L4.5 8.5L2 6"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>

                          <h2 className="text-sm font-normal">Paid</h2>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        <div className="flex items-center gap-x-2">
                          <img
                            className="object-cover w-8 h-8 rounded-full"
                            src="https://images.unsplash.com/photo-1506863530036-1efeddceb993?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1344&q=80"
                            alt=""
                          />
                          <div>
                            <h2 className="text-sm font-medium text-gray-800 dark:text-white ">
                              Candice Wu
                            </h2>
                            <p className="text-xs font-normal text-gray-600 dark:text-gray-400">
                              candice@example.com
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-100 whitespace-nowrap">
                        UP-53 CZ-1234
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <div className="flex items-center gap-x-6">
                          <button className="text-gray-100 transition-colors duration-200 dark:hover:text-indigo-500 dark:text-gray-300 hover:text-indigo-500 focus:outline-none">
                            View
                          </button>

                          <button className="text-blue-500 transition-colors duration-200 hover:text-indigo-500 focus:outline-none">
                            Download
                          </button>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td className="px-4 py-4 text-sm font-medium text-gray-100  whitespace-nowrap">
                        <div className="inline-flex items-center gap-x-3">
                          <span>#3066</span>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-100 whitespace-nowrap">
                        Jan 6, 2022
                      </td>
                      <td className="px-4 py-4 text-sm font-medium text-gray-100 whitespace-nowrap">
                        <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-white">
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10 3L4.5 8.5L2 6"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>

                          <h2 className="text-sm font-normal">Paid</h2>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        <div className="flex items-center gap-x-2">
                          <img
                            className="object-cover w-8 h-8 rounded-full"
                            src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=644&q=80"
                            alt=""
                          />
                          <div>
                            <h2 className="text-sm font-medium text-gray-800 dark:text-white ">
                              Orlando Diggs
                            </h2>
                            <p className="text-xs font-normal text-gray-600 dark:text-gray-400">
                              orlando@example.com
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-100 whitespace-nowrap">
                        UP-53 CZ-1234
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <div className="flex items-center gap-x-6">
                          <button className="text-gray-100 transition-colors duration-200 dark:hover:text-indigo-500 dark:text-gray-300 hover:text-indigo-500 focus:outline-none">
                            View
                          </button>

                          <button className="text-blue-500 transition-colors duration-200 hover:text-indigo-500 focus:outline-none">
                            Download
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/*  */}
        <div className="flex items-center justify-between mt-6 pb-8">
          <button
            onClick={() => {}}
            className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 rtl:-scale-x-100"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>

            <span>previous</span>
          </button>

          <div className="items-center hidden md:flex gap-x-3">
            <button
              onClick={() => {}}
              className="px-2 py-1 text-sm text-blue-500 rounded-md dark:bg-gray-800 bg-blue-100/60"
            >
              1
            </button>
            <button
              onClick={() => {}}
              className="px-2 py-1 text-sm text-gray-100 hover:text-gray-700 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
            >
              2
            </button>
            <button
              onClick={() => {}}
              className="px-2 py-1 text-sm text-gray-100 hover:text-gray-700 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
            >
              3
            </button>
            <button
              onClick={() => {}}
              className="px-2 py-1 text-sm text-gray-100 hover:text-gray-700 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
            >
              ...
            </button>
            <button
              onClick={() => {}}
              className="px-2 py-1 text-sm text-gray-100 hover:text-gray-700 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
            >
              12
            </button>
            <button
              onClick={() => {}}
              className="px-2 py-1 text-sm text-gray-100 hover:text-gray-700 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
            >
              13
            </button>
            <button
              onClick={() => {}}
              className="px-2 py-1 text-sm text-gray-100 hover:text-gray-700 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
            >
              14
            </button>
          </div>

          <button
            onClick={() => {}}
            className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800"
          >
            <span>Next</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 rtl:-scale-x-100"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
      </section>
    </div>
  );
}

export default ChallanStatistics;
