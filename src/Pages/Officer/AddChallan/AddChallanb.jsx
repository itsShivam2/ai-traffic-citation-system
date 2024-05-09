import React, { useState } from "react";
import Layout from "../../../Components/Layout/Layout";
import Spinner from "../../../Components/Spinner/Spinner";

function AddChallanb() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [apiResponse, setApiResponse] = useState(null);
  const [spinnerVisible, setSpinnerVisible] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleImageSubmit = async () => {
    try {
      setApiResponse(null); // Clear previous response
      setSpinnerVisible(true); // Show the spinner

      // Simulating API request and response with dummy data
      const response = await yourApiRequestFunction(selectedFile);
      setApiResponse(response); // Assuming response contains vehicle information
    } catch (error) {
      console.error("API request failed:", error);
    } finally {
      setSpinnerVisible(false); // Hide the spinner when the API request is complete (success or failure)
    }
  };

   // const handleImageSubmit = async () => {
  //   // Simulating API request and response with dummy data
  //   try {
  //     // Assuming your API function is async
  //     const response = await yourApiRequestFunction(selectedFile);
  //     setApiResponse(response); response contains vehicle information
  //   } catch (error) {
  //     console.error("API request failed:", error);
  //   }
  // };

  return (
    <Layout>
      <div className="flex flex-col justify-center items-center m-4 p-4 min-h-screen h-max-content">
        {/* Select image */}
        <div className="image-input flex items-center gap-10">
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            id="file-input"
            className="hidden"
          />
          <label
            htmlFor="file-input"
            className="min-h-20 min-w-330 bg-red-500 text-white text-2xl font-semibold text-center cursor-pointer px-8 py-6 mt-10 rounded-2xl shadow-md hover:bg-red-700 transition duration-1000"
          >
            Select Image
          </label>
        </div>
        {/* Dropdown */}
        <div className="pb-10 z-50">
          <div
            id="catJobBox"
            className="hidden text-gray-600 relative md:flex justify-between items-center min-w-max select-none"
          >
            <input
              type="checkbox"
              name=""
              id="toggleJobLstCat"
              className="peer hidden outline-none"
            />
            <input
              type="text"
              name=""
              id="catJobName"
              value="Vehicle"
              className="pl-3 w-full bg-white text-base font-medium cursor-pointer"
              readOnly
            />
            <label
              htmlFor="toggleJobLstCat"
              name="absolute top-0 left-0 w-full h-full"
            ></label>
            <span className="min-w-max">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <div
              id="catJobLst"
              className="absolute transition-all duration-500 ease-in-out translate-y-10 opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:translate-y-1 top-full left-0 w-full bg-white bg-opacity-80 rounded-lg py-2"
            >
              <ul className="flex flex-col w-full">
                <li className="cursor-default transition hover:bg-gray-100 hover:bg-opacity-80 flex px-5 py-2">
                  Car
                </li>
                <li className="cursor-default transition hover:bg-gray-100 hover:bg-opacity-80 flex px-5 py-2">
                  Truck
                </li>
                <li className="cursor-default transition hover:bg-gray-100 hover:bg-opacity-80 flex px-5 py-2">
                  Motorcycle
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Challan Amount */}
        <div className="relative flex p-1 rounded-xl bg-white shadow-2xl md:p-2">
          <input
            placeholder="Enter Challan Amount"
            className="w-full p-4 outline-none text-gray-600"
            type="text"
          />
          {/* <button
        type="button"
        title="Start buying"
        className="ml-auto py-3 px-6 rounded-lg text-center transition bg-gradient-to-br from-pink-500 to-purple-500 hover:to-purple-600 active:from-pink-700 focus:from-pink-600 md:px-12"
      >
        <span className="hidden text-white font-semibold md:block">Search</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 mx-auto text-white md:hidden bi bi-search"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
      </button> */}
        </div>
        {/* Show image  */}
        {selectedFile && (
          <div className="flex flex-col items-center justify-center mt-20">
            <h2 className="text-lg font-semibold my-2">Preview Image</h2>
            <img
              className="max-w-[360px] max-h-[240px]"
              src={URL.createObjectURL(selectedFile)}
              alt="Selected Image Preview"
            />

            <p className="text-2xl text-center mb-10">{selectedFile.name}</p>

            <button
              // className="bg-green-500 text-white text-2xl font-semibold px-8 py-4 rounded-lg cursor-pointer hover:bg-green-700 transition duration-1000"
              className=" py-4 px-8 rounded-lg text-white font-semibold text-center transition bg-gradient-to-br from-pink-500 to-purple-500 hover:to-purple-600 active:from-pink-700 focus:from-pink-600 md:px-12"
              onClick={handleImageSubmit}
            >
              Submit Image
            </button>
          </div>
        )}
        {spinnerVisible && <Spinner />}{" "}
        {/* Display Spinner while waiting for API request */}
        {apiResponse && (
          <div className="text-2xl mt-20 text-left">
            <p>Vehicle Name: {apiResponse.vehicleName}</p>
            <p>Vehicle Model: {apiResponse.vehicleModel}</p>
            <p>Registration Year: {apiResponse.registrationYear}</p>
            <p>Owner's Name: {apiResponse.ownerName}</p>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default AddChallanb;

// Dummy API request function (replace with your actual API function)
const yourApiRequestFunction = async (file) => {
  // Simulating API response with dummy data
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        vehicleName: "Unknown Vehicle",
        ownerName: "Unknown Owner",
        vehicleType: "Bike",
        vehicleModel: "XYZ123",
        vehicleNumber: "UP53 XY1234",
        registrationYear: "2022",
        violationType: "",
        violationDate: "",
        penaltyAmount: 500,
      });
    }, 3000); // Simulating a delay to mimic an API request
  });
};
