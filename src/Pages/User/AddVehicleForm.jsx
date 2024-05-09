import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../../Components/Layout/Layout";
function AddVehicleForm() {
  const [formData, setFormData] = useState({
    vehicleNumber: "",
    vehicleType: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    e.preventDefault();
    // handleImageSubmit();
  };
  return (
    <Layout>
      <section className="bg-[#111827] dark:bg-gray-900">
        <div className="flex justify-center min-h-screen">
          <div
            className="hidden bg-cover lg:block lg:w-2/5"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1494621930069-4fd4b2e24a11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80")',
            }}
          ></div>

          <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
            <div className="w-full">
              <h1 className="text-2xl font-semibold tracking-wider text-gray-100 capitalize dark:text-white">
                Add Vehicle
              </h1>

              <form className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                <div>
                  <label className="block mb-2 text-sm text-gray-100 dark:text-gray-200">
                    Vehicle Number
                  </label>
                  <input
                    type="text"
                    id="vehicleNumber"
                    name="vehicleNumber"
                    value={formData.vehicleNumber}
                    onChange={handleInputChange}
                    placeholder="UP-53 XY-1234"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-100 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-100 dark:text-gray-200">
                    Last name
                  </label>
                  <select
                    id="vehicleType"
                    name="vehicleType"
                    value={formData.vehicleType}
                    onChange={handleInputChange}
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-100 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  >
                    <option value="">Please select</option>
                    <option value="BS">Bus</option>
                    <option value="CR">Car</option>
                    <option value="BK">Bike</option>
                    <option value="TR">Truck</option>
                  </select>
                </div>

                <div className="flex flex-col items-center gap-4 md:flex-row md:col-span-2">
                  <button className="w-full md:w-1/2 flex items-center justify-between px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                    <span>Submit </span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 rtl:-scale-x-100"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default AddVehicleForm;

// <Layout>
//   <div className="flex flex-col items-center">
//     <h1 className="text-center text-4xl my-4 py-4">Add Challan</h1>
//     <form onSubmit={handleSubmit}>
//       {/*  Vehicle Number */}
//       <div className="mb-6">
//         <label
//           htmlFor="vehicleNo"
//           className="block text-sm text-gray-500 dark:text-gray-300"
//         >
//           Vehicle Number
//         </label>

//         <input
//           type="text"
//           id="vehicleNumber"
//           name="vehicleNumber"
//           value={formData.vehicleNumber}
//           onChange={handleInputChange}
//           placeholder="UP53 ZY1234"
//           className="block w-full mt-2 px-5 py-2.5 rounded-lg border border-gray-500 bg-white text-gray-700 placeholder-gray-400/70 dark:placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
//         />
//       </div>

//       {/* Vehicle Type */}
//       <div className="mb-6">
//         <label
//           htmlFor="vehicleType"
//           className="block text-sm text-gray-500 dark:text-gray-300"
//         >
//           Vehicle Type
//         </label>

//         <select
//           id="vehicleType"
//           name="vehicleType"
//           value={formData.vehicleType}
//           onChange={handleInputChange}
//           className="block w-full mt-2 px-5 py-2.5 rounded-lg border-gray-500 bg-white text-gray-700 placeholder-gray-400/70 dark:placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
//         >
//           <option value="">Please select</option>
//           <option value="BS">Bus</option>
//           <option value="CR">Car</option>
//           <option value="BK">Bike</option>
//           <option value="TR">Truck</option>
//         </select>
//       </div>

//       <button
//         type="submit"
//         className="py-4 px-8 rounded-lg text-white font-semibold text-center transition bg-gradient-to-br from-pink-500 to-purple-500 hover:to-purple-600 active:from-pink-700 focus:from-pink-600 md:px-12"
//       >
//         Submit Form
//       </button>
//     </form>
//   </div>
// </Layout>
