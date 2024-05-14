import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Spinner from "../../../Components/Spinner/Spinner";

function ChallanStatistics() {
  const [loading, setLoading] = useState(false);
  const [challans, setChallans] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchChallans = async () => {
      try {
        setLoading(true);
        const response = await axios.get("api/v1/challans/user/me", {
          withCredentials: true,
        });
        if (response.status == 200) {
          setChallans(response.data.challans);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching challans:", error);
      }
    };

    fetchChallans();
  }, []);

  // Paginate
  const totalPages = Math.ceil(challans.length / 5);
  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const startIndex = (currentPage - 1) * 5;
  const endIndex = startIndex + 5;
  const paginatedChallans = challans.slice(startIndex, endIndex);

  return (
    <div className="bg-[#111827] pt-4">
      <h2 className="text-3xl text-center text-gray-100 font-semibold font-[Fahkwang] mb-8 pt-8">
        Challans List
      </h2>
      <section className="bg-[#111827] container px-4 pt-8 pb-16 mx-auto">
        <div className="flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                <table className="min-h-[360px] min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-[#263658] text-gray-100 font-[Fahkwang]">
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
                        Vehicle No.
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
                        Action
                      </th>

                      <th scope="col" className="relative py-3.5 px-4">
                        <span className="sr-only">Actions</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-[#111827] divide-y divide-gray-200 font-[Montserrat]">
                    {loading ? (
                      <td
                        className="px-4 py-4 text-sm font-medium text-gray-100 whitespace-nowrap"
                        colSpan="6"
                      >
                        <div className="w-full inline-flex items-center justify-center gap-x-3">
                          <Spinner />
                        </div>
                      </td>
                    ) : (
                      <>
                        {" "}
                        {challans.length > 0 ? (
                          paginatedChallans.map((challan) => (
                            <tr key={challan.id}>
                              <td className="px-4 py-4 text-sm font-medium text-gray-100  whitespace-nowrap">
                                <div className="inline-flex items-center gap-x-3">
                                  <span>#{challan.id}</span>
                                </div>
                              </td>
                              <td className="px-4 py-4 text-sm text-gray-100 whitespace-nowrap">
                                {challan.issuedAt}
                              </td>

                              <td className="px-4 py-4 text-sm text-gray-100 whitespace-nowrap">
                                {challan.vehicleLicensePlate}
                              </td>
                              <td className="px-4 py-4 text-sm font-medium text-gray-100 whitespace-nowrap">
                                {challan.status === "PAID" ? (
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

                                    <h2 className="text-sm font-normal">
                                      {challan.status}
                                    </h2>
                                  </div>
                                ) : (
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

                                    <h2 className="text-sm font-normal">
                                      {challan.status}
                                    </h2>
                                  </div>
                                )}
                              </td>
                              <td className="px-4 py-4 text-sm whitespace-nowrap">
                                <div className="flex items-center gap-x-6">
                                  <Link to={`/challans/${challan.id}`}>
                                    {challan.status === "PAID" ? (
                                      <button className="text-gray-100 transition-colors duration-200 dark:hover:text-indigo-500 dark:text-gray-300 hover:text-indigo-500 focus:outline-none">
                                        View
                                      </button>
                                    ) : (
                                      <button className="text-gray-100 transition-colors duration-200 hover:text-teal-500 focus:outline-none">
                                        Pay
                                      </button>
                                    )}
                                  </Link>
                                </div>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <>
                            <td
                              className="px-4 py-4 text-sm text-center font-medium text-gray-100 whitespace-nowrap"
                              colSpan="7"
                            >
                              <div className="inline-flex items-center gap-x-3">
                                <span className="text-xl font-[Fahkwang]">
                                  No Challans found
                                </span>
                              </div>
                            </td>
                          </>
                        )}
                      </>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Pagination Buttons */}
        <div className="flex items-center justify-between mt-6 pb-8">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
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
            {[...Array(totalPages).keys()].map((pageNumber) => (
              <button
                key={pageNumber + 1}
                onClick={() => goToPage(pageNumber + 1)}
                className={`px-2 py-1 text-lg rounded-md dark:bg-gray-100 ${
                  currentPage === pageNumber + 1
                    ? "text-gray-900 bg-gray-100"
                    : "text-gray-100 hover:text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                {pageNumber + 1}
              </button>
            ))}
          </div>

          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
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
