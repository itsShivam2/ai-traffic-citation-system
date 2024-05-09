import React, { useState } from "react";
import Layout from "../../Components/Layout/Layout";
import Spinner from "../../Components/Spinner/Spinner";

function AddChallan() {
  const [formData, setFormData] = useState({
    violationDate: "",
    vehicleType: "",
    violationType: "",
    penaltyAmount: "",
    imageFile: null,
  });

  const [apiResponse, setApiResponse] = useState(null);
  const [spinnerVisible, setSpinnerVisible] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFormData({
      ...formData,
      imageFile: file,
    });
    setSelectedFile(file);
  };

  const handleImageSubmit = async () => {
    try {
      setApiResponse(null);
      setSpinnerVisible(true);

      const response = await apiRequest(formData);
      setApiResponse(response);
    } catch (error) {
      console.error("API request failed:", error);
    } finally {
      setSpinnerVisible(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleImageSubmit();
  };

  return (
    <Layout>
      <div className="bg-[#111827] flex flex-col items-center">
        <h1 className="text-center text-white text-4xl my-4 py-4">Add Challan</h1>
        <form onSubmit={handleSubmit}>
          {/* Violation Date */}
          <div className="mb-6">
            <label
              htmlFor="violationDate"
              className="block text-sm text-gray-100 dark:text-gray-200"
            >
              Violation Date
            </label>

            <input
              type="date"
              id="violationDate"
              name="violationDate"
              value={formData.violationDate}
              onChange={handleInputChange}
              className="block w-full mt-2 px-5 py-2.5 rounded-lg border border-gray-500 bg-white text-gray-700 placeholder-gray-400/70 dark:placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-100 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
            />
          </div>

          {/* Vehicle Type */}
          <div className="mb-6">
            <label
              htmlFor="vehicleType"
              className="block text-sm text-gray-100 dark:text-gray-200"
            >
              Vehicle Type
            </label>

            <select
              id="vehicleType"
              name="vehicleType"
              value={formData.vehicleType}
              onChange={handleInputChange}
              className="block w-full mt-2 px-5 py-2.5 rounded-lg border-[1px] border-gray-500 bg-white text-gray-700 placeholder-gray-400/70 dark:placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-100 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
            >
              <option value="">Please select</option>
              <option value="BS">Bus</option>
              <option value="CR">Car</option>
              <option value="BK">Bike</option>
              <option value="TR">Truck</option>
            </select>
          </div>

          {/* Violation Type */}
          <div className="mb-6">
            <label
              htmlFor="violationType"
              className="block text-sm text-gray-100 dark:text-gray-200"
            >
              Violation Type
            </label>

            <select
              id="violationType"
              name="violationType"
              value={formData.violationType}
              onChange={handleInputChange}
              className="block w-full mt-2 px-5 py-2.5 rounded-lg border-[1px] border-gray-500 bg-white text-gray-700 placeholder-gray-400/70 dark:placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-100 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
            >
              <option value="">Please select</option>
              <option value="NH">No Helmet</option>
              <option value="M2P">More than 2 people</option>
              <option value="OS">Overspeed</option>
            </select>
          </div>

          {/*  Penalty Amount */}
          <div className="mb-6">
            <label
              htmlFor="amount"
              className="block text-sm text-gray-100 dark:text-gray-200"
            >
              Penalty Amount
            </label>

            <input
              type="number"
              name="penaltyAmount"
              id="penaltyAmount"
              value={formData.penaltyAmount}
              onChange={handleInputChange}
              placeholder="Enter amount"
              className="block w-full mt-2 px-5 py-2.5 rounded-lg border border-gray-500 bg-white text-gray-700 placeholder-gray-400/70 dark:placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-100 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
            />
          </div>

          {/* Image */}
          <div className="mb-6">
            <label
              htmlFor="image"
              className="block text-sm text-gray-100 dark:text-gray-200"
            >
              Image
            </label>

            <input
              type="file"
              id="image"
              name="imageFile"
              onChange={handleFileChange}
              className="block w-full px-3 py-2 mt-2 text-sm text-gray-600 bg-white border border-gray-500 rounded-lg file:bg-gray-200 file:text-gray-700 file:text-sm file:px-4 file:py-1 file:border-none file:rounded-full dark:file:bg-gray-800 dark:file:text-gray-200 dark:text-gray-300 placeholder-gray-400/70 dark:placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-100 dark:bg-gray-900 dark:focus:border-blue-300"
            />
          </div>

          {/* Image 2 */}
          {/* <div className="mb-6">
            <label
              htmlFor="file"
              className="block text-sm text-gray-100 dark:text-gray-200"
            >
              Image
            </label>

            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center w-full max-w-lg p-5 mx-auto mt-2 text-center bg-white border-2 border-gray-500 border-dashed cursor-pointer dark:bg-gray-900 dark:border-gray-100 rounded-xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8 text-gray-500 dark:text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                />
              </svg>

              <h2 className="mt-1 font-medium tracking-wide text-gray-700 dark:text-gray-200">
                Vehicle Image
              </h2>

              <p className="mt-2 text-xs tracking-wide text-gray-500 dark:text-gray-400">
                Upload or darg & drop your file SVG, PNG, JPG or GIF.{" "}
              </p>

              <input
                id="dropzone-file"
                type="file"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>
          </div> */}
          {/*  */}

          {/* Display image preview */}
          {selectedFile && (
            <div className="flex flex-col items-center justify-center mt-6">
              <h2 className="text-lg font-semibold my-2">Preview Image</h2>
              <img
                className="max-w-[360px] max-h-[240px] mb-2"
                src={URL.createObjectURL(selectedFile)}
                alt="Selected Image Preview"
              />
              <p className="text-xl text-center mb-4">{selectedFile.name}</p>
            </div>
          )}

          <button
            type="submit"
            className="py-4 px-8 rounded-lg text-white font-semibold text-center transition bg-gradient-to-br from-pink-500 to-purple-500 hover:to-purple-600 active:from-pink-700 focus:from-pink-600 md:px-12"
          >
            Submit Form
          </button>
        </form>

        {spinnerVisible && <Spinner />}

        {apiResponse && (
          <div className="text-2xl text-white mt-8 text-left">
            <p>Vehicle Number: {apiResponse.vehicleNumber}</p>
            <p>Vehicle Type: {apiResponse.vehicleType}</p>
            <p>Registration Year: {apiResponse.registrationYear}</p>
            <p>Owner's Name: {apiResponse.ownerName}</p>
            <p>Violation Type: {apiResponse.violationType}</p>
            <p>Violation Date: {apiResponse.violationDate}</p>
            <p>Peanlty Amount: {apiResponse.penaltyAmount}</p>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default AddChallan;

const apiRequest = async (file) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        vehicleNumber: "UP53 XY1234",
        vehicleType: "Bike",
        ownerName: "Unknown Owner",
        registrationYear: "2022",
        violationType: "",
        violationDate: "",
        penaltyAmount: 500,
      });
    }, 3000);
  });
};
