import React, { useState } from "react";
import Spinner from "../../../Components/Spinner/Spinner";
function RegisteredVehicles({ vehicles, loading }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(vehicles.length / itemsPerPage);

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedVehicles = vehicles.slice(startIndex, endIndex);

  return (
    <div>
      <div className="bg-[#111827] flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-[#263658] text-gray-100">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal font-[Fahkwang] text-left rtl:text-right"
                    >
                      <button className="flex items-center gap-x-3 focus:outline-none">
                        <span>Vehicle No.</span>
                      </button>
                    </th>

                    <th
                      scope="col"
                      className="px-12 py-3.5 text-sm font-normal font-[Fahkwang] text-left rtl:text-right"
                    >
                      Vehicle Type
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal font-[Fahkwang] text-left rtl:text-right"
                    >
                      Action
                    </th>

                    <th scope="col" className="relative py-3.5 px-4">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900 text-gray-100 font-[Montserrat]">
                  {loading ? (
                    <td
                      className="px-4 py-4 text-sm font-medium text-gray-100 whitespace-nowrap"
                      colSpan="6"
                    >
                      <div className="min-h-[200px] w-full inline-flex items-center justify-center gap-x-3">
                        <Spinner />
                      </div>
                    </td>
                  ) : vehicles.length > 0 ? (
                    paginatedVehicles.map((vehicle, index) => (
                      <tr key={index}>
                        <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                          <p className="text-sm font-normal text-gray-100">
                            {vehicle.licencePlate}
                          </p>
                        </td>
                        <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
                          <div className="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-white">
                            {vehicle.vehicleType}
                          </div>
                        </td>
                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                          <button className="px-1 py-1 text-gray-100 hover:text-gray-700 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-100">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                              />
                            </svg>
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        className="px-4 py-4 text-sm text-center font-medium whitespace-nowrap"
                        colSpan="4"
                      >
                        <p className="text-sm font-normal text-gray-100">
                          No Vehicle
                        </p>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-6 pb-8">
        <div className="items-center md:flex gap-x-3">
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
      </div>
    </div>
  );
}

export default RegisteredVehicles;
