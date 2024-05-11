import React, { useState, useEffect } from "react";
import axios from "axios";

const dummyChallans = [
  {
    id: 1,
    createdAt: "2022-05-10T08:00:00Z",
    status: "NOT PAID",
    vehicleLicensePlate: "UP-53 CZ-1234",
    user: {
      name: "User1",
      email: "user1@example.com",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    },
  },
  {
    id: 2,
    createdAt: "2022-05-09T08:00:00Z",
    status: "PAID",
    vehicleLicensePlate: "DL-13 QW-5678",
    user: {
      name: "User2",
      email: "user2@example.com",
      image:
        "https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    },
  },
  {
    id: 3,
    createdAt: "2022-05-08T08:00:00Z",
    status: "PAID",
    vehicleLicensePlate: "MH-02 AB-9876",
    user: {
      name: "User3",
      email: "user3@example.com",
      image:
        "https://images.unsplash.com/photo-1557682228-3afac29bf4c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    },
  },
  {
    id: 4,
    createdAt: "2022-05-07T08:00:00Z",
    status: "NOT PAID",
    vehicleLicensePlate: "KA-09 XY-3456",
    user: {
      name: "User4",
      email: "user4@example.com",
      image:
        "https://images.unsplash.com/photo-1546520345-7ec3b62f7693?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
  },
  {
    id: 5,
    createdAt: "2022-05-06T08:00:00Z",
    status: "PAID",
    vehicleLicensePlate: "TN-14 KL-6789",
    user: {
      name: "User5",
      email: "user5@example.com",
      image:
        "https://images.unsplash.com/photo-1520229656092-76c11a6a0e81?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
  },
  {
    id: 6,
    createdAt: "2022-05-05T08:00:00Z",
    status: "NOT PAID",
    vehicleLicensePlate: "MH-03 PQ-4567",
    user: {
      name: "User6",
      email: "user6@example.com",
      image:
        "https://images.unsplash.com/photo-1566817410163-60d0d0a3b279?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
  },
  {
    id: 7,
    createdAt: "2022-05-04T08:00:00Z",
    status: "PAID",
    vehicleLicensePlate: "UP-32 RS-8901",
    user: {
      name: "User7",
      email: "user7@example.com",
      image:
        "https://images.unsplash.com/photo-1512626120411-e80f47f3f4e1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
  },
  {
    id: 8,
    createdAt: "2022-05-03T08:00:00Z",
    status: "NOT PAID",
    vehicleLicensePlate: "DL-14 MN-2345",
    user: {
      name: "User8",
      email: "user8@example.com",
      image:
        "https://images.unsplash.com/photo-1546054167-6178017b6716?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
  },
  {
    id: 9,
    createdAt: "2022-05-02T08:00:00Z",
    status: "PAID",
    vehicleLicensePlate: "MH-04 ST-7890",
    user: {
      name: "User9",
      email: "user9@example.com",
      image:
        "https://images.unsplash.com/photo-1543868163-a3d58c063cd0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
  },
  {
    id: 10,
    createdAt: "2022-05-01T08:00:00Z",
    status: "PAID",
    vehicleLicensePlate: "GJ-01 OP-1234",
    user: {
      name: "User10",
      email: "user10@example.com",
      image:
        "https://images.unsplash.com/photo-1520229656092-76c11a6a0e81?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
  },
  {
    id: 11,
    createdAt: "2022-04-30T08:00:00Z",
    status: "NOT PAID",
    vehicleLicensePlate: "RJ-07 UV-5678",
    user: {
      name: "User11",
      email: "user11@example.com",
      image:
        "https://images.unsplash.com/photo-1582042983342-6c6f66d91b9b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
  },
  {
    id: 12,
    createdAt: "2022-04-29T08:00:00Z",
    status: "PAID",
    vehicleLicensePlate: "KA-08 WX-8901",
    user: {
      name: "User12",
      email: "user12@example.com",
      image:
        "https://images.unsplash.com/photo-1593717093216-2b1f47eb1a92?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
  },
  {
    id: 13,
    createdAt: "2022-04-28T08:00:00Z",
    status: "NOT PAID",
    vehicleLicensePlate: "UP-45 YZ-6789",
    user: {
      name: "User13",
      email: "user13@example.com",
      image:
        "https://images.unsplash.com/photo-1532594909817-3d95b64ea32c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
  },
  {
    id: 14,
    createdAt: "2022-04-27T08:00:00Z",
    status: "PAID",
    vehicleLicensePlate: "DL-15 AB-2345",
    user: {
      name: "User14",
      email: "user14@example.com",
      image:
        "https://images.unsplash.com/photo-1533174072545-243863d80ede?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
  },
];

function ChallanStatistics() {
  const [challans, setChallans] = useState(dummyChallans);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchChallans = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/challans/get-all"
        );
        setChallans(response.data.data.challans);
      } catch (error) {
        console.error("Error fetching challans:", error);
      }
    };

    fetchChallans();
  }, []);

  // Paginate
  const totalPages = Math.ceil(dummyChallans.length / 5);
  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const startIndex = (currentPage - 1) * 5;
  const endIndex = startIndex + 5;
  const paginatedChallans = dummyChallans.slice(startIndex, endIndex);

  return (
    <div>
      <section className="bg-[#111827] container px-4 mx-auto">
        <div className="flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
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
                    {paginatedChallans.map((challan) => (
                      <tr key={challan.id}>
                        <td className="px-4 py-4 text-sm font-medium text-gray-100  whitespace-nowrap">
                          <div className="inline-flex items-center gap-x-3">
                            <span>#{challan.id}</span>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-100 whitespace-nowrap">
                          {challan.createdAt}
                        </td>

                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          <div className="flex items-center gap-x-2">
                            <img
                              className="object-cover w-8 h-8 rounded-full"
                              src={challan.user.image}
                              alt=""
                            />
                            <div>
                              <h2 className="text-sm font-medium text-white">
                                {challan.user.name}
                              </h2>
                              <p className="text-xs font-normal text-gray-100">
                                {challan.user.email}
                              </p>
                            </div>
                          </div>
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
                            {challan.status === "PAID" ? (
                              <button className="text-gray-100 transition-colors duration-200 dark:hover:text-indigo-500 dark:text-gray-300 hover:text-indigo-500 focus:outline-none">
                                View
                              </button>
                            ) : (
                              <button className="text-gray-100 transition-colors duration-200 hover:text-teal-500 focus:outline-none">
                                Pay
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/*  */}
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
