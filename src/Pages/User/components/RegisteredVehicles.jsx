import React from "react";

function RegisteredVehicles() {
  return (
    <div>
      <div class="bg-[#111827] flex flex-col mt-6">
        <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div class="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
              <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead class="bg-[#263658] text-gray-100">
                  <tr>
                    <th
                      scope="col"
                      class="py-3.5 px-4 text-sm font-normal font-[Fahkwang] text-left rtl:text-right"
                    >
                      <button class="flex items-center gap-x-3 focus:outline-none">
                        <span>Vehicle No.</span>
                      </button>
                    </th>

                    <th
                      scope="col"
                      class="px-12 py-3.5 text-sm font-normal font-[Fahkwang] text-left rtl:text-right"
                    >
                      Vehicle Type
                    </th>

                    <th
                      scope="col"
                      class="px-4 py-3.5 text-sm font-normal font-[Fahkwang] text-left rtl:text-right"
                    >
                      Action
                    </th>

                    <th scope="col" class="relative py-3.5 px-4">
                      <span class="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900 text-gray-100 font-[Montserrat]">
                  <tr>
                    <td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
                      <p class="text-sm font-normal text-gray-100">
                        sisyphus.com
                      </p>
                    </td>
                    <td class="px-12 py-4 text-sm font-medium whitespace-nowrap">
                      <div class="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-white">
                        Customer
                      </div>
                    </td>
                    <td class="px-4 py-4 text-sm whitespace-nowrap">
                      <button class="px-1 py-1 text-gray-100 hover:text-gray-700 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                          />
                        </svg>
                      </button>
                    </td>
                  </tr>

                  <tr>
                    <td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
                      <p class="text-sm font-normal text-gray-100">
                        hourglass.app
                      </p>
                    </td>
                    <td class="px-12 py-4 text-sm font-medium whitespace-nowrap">
                      <div class="inline px-3 py-1 text-sm font-normal text-gray-500 bg-gray-100 rounded-full dark:text-gray-400 gap-x-2">
                        Churned
                      </div>
                    </td>
                    <td class="px-4 py-4 text-sm whitespace-nowrap">
                      <button class="px-1 py-1 text-gray-100 hover:text-gray-700 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                          />
                        </svg>
                      </button>
                    </td>
                  </tr>

                  <tr>
                    <td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
                      <p class="text-sm font-normal text-gray-100">
                        quotient.co
                      </p>
                    </td>
                    <td class="px-12 py-4 text-sm font-medium whitespace-nowrap">
                      <div class="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-white">
                        Customer
                      </div>
                    </td>
                    <td class="px-4 py-4 text-sm whitespace-nowrap">
                      <button class="px-1 py-1 text-gray-100 hover:text-gray-700 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                          />
                        </svg>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisteredVehicles;
