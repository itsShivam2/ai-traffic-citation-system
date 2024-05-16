import React, { useState } from "react";
import Layout from "../../Components/Layout/Layout";
import Spinner from "../../Components/Spinner/Spinner";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Loader from "../../Components/Loader/Loader";

function AddChallan() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    vehicleType: "",
    violation: "",
    imageFile: null,
  });

  const [apiResponse, setApiResponse] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFormData({
      ...formData,
      imageFile: file,
    });
    setSelectedFile(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formPayload = new FormData();
    formPayload.append("vehicleType", formData.vehicleType);
    formPayload.append("violation", formData.violation);
    formPayload.append("vehicle-image", formData.imageFile);

    try {
      setLoading(true);
      const response = await axios.post("/api/v1/challans", formPayload, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 201) {
        setLoading(false);
        toast.success("Challan added successfully!");

        setFormData({
          vehicleType: "",
          violation: "",
          imageFile: null,
        });

        setTimeout(() => {
          navigate(`/challans/${response.data.challan.id}`);
        }, 1000);
      } else {
        setLoading(false);
        toast.error("Failed to add challan. Please try again later.");
        setFormData({
          vehicleType: "",
          violation: "",
          imageFile: null,
        });
      }
    } catch (error) {
      setLoading(false);
      console.error("Error adding challan:", error);
      toast.error("Failed to add challan. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="bg-[#111827]">
        {/* Instructions */}

        <button
          onClick={() => navigate(-1)}
          className="bg-gray-700 hover:bg-gray-800 text-lg text-white font-bold font-[Fahkwang] py-2 px-6 rounded m-8"
        >
          Back
        </button>

        <div className="flex flex-col md:flex-row items-stretch">
          <div className="w-full md:w-1/2 p-8 text-white">
            <h1 className="text-4xl my-4 py-4 font-[Fahkwang]">
              Instructions to Add Challan
            </h1>
            <p className="text-xl mb-4 font-[Montserrat]">
              Please fill out the form to add a new challan.
            </p>
            <p className="text-xl mb-4 font-[Montserrat]">
              Make sure to provide accurate information about the violation
              date, vehicle type, violation type, and upload an image of the
              violation.
            </p>
            <p className="text-xl mb-4 font-[Montserrat]">
              Once the form is submitted, the details will be processed, and you
              will receive information about the added challan.
            </p>
          </div>
          {/* Form */}
          <div className="w-full md:w-1/2 p-8">
            <h1 className="text-center text-white text-4xl my-4 py-4 font-[Fahkwang]">
              Add Challan
            </h1>
            <form onSubmit={handleSubmit}>
              {/* Vehicle Type */}
              {/* Image */}
              <div className="mb-6">
                <label
                  htmlFor="imageFile"
                  className="block text-sm text-gray-100 dark:text-gray-200 font-[Fahkwang]"
                >
                  Image
                </label>

                <input
                  type="file"
                  id="imageFile"
                  name="imageFile"
                  required
                  onChange={handleFileChange}
                  className="block w-full px-3 py-2 mt-2 text-sm text-gray-600 bg-white border border-gray-500 rounded-lg file:bg-gray-200 file:text-gray-700 file:text-sm file:px-4 file:py-1 file:border-none file:rounded-full dark:file:bg-gray-800 dark:file:text-gray-200 dark:text-gray-300 placeholder-gray-400/70 dark:placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-100 dark:bg-gray-900 dark:focus:border-blue-300"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="vehicleType"
                  className="block text-sm text-gray-100 dark:text-gray-200 font-[Fahkwang]"
                >
                  Vehicle Type
                </label>

                <select
                  id="vehicleType"
                  name="vehicleType"
                  required
                  value={formData.vehicleType}
                  onChange={handleInputChange}
                  className="block w-full mt-2 px-5 py-2.5 rounded-lg border-[1px] border-gray-500 bg-white text-gray-700 font-[Montserrat] placeholder-gray-400/70 dark:placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-100 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                >
                  <option value="">Please select</option>
                  <option value="TWO_WHEELER">2-Wheeler</option>
                  <option value="THREE_WHEELER">3-Wheeler</option>
                  <option value="FOUR_WHEELER">4-Wheeler Light</option>
                  <option value="FOUR_WHEELER_HEAVY">4-Wheeler Heavy</option>
                </select>
              </div>

              {/* Violation Type */}
              <div className="mb-6">
                <label
                  htmlFor="violation"
                  className="block text-sm text-gray-100 dark:text-gray-200 font-[Fahkwang]"
                >
                  Violation Type
                </label>

                <select
                  id="violation"
                  name="violation"
                  required
                  value={formData.violation}
                  onChange={handleInputChange}
                  className="block w-full mt-2 px-5 py-2.5 rounded-lg border-[1px] border-gray-500 bg-white text-gray-700 font-[Montserrat] placeholder-gray-400/70 dark:placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-100 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                >
                  <option value="">Please select</option>
                  <option value="no licence">No Licence</option>
                  <option value="overspeeding">Overspeeding</option>
                  <option value="missing documents">Missing Documents</option>
                </select>
              </div>

              {/* Display image preview */}
              {selectedFile && (
                <div className="flex flex-col items-center justify-center mt-6">
                  <h2 className="text-lg font-semibold my-2">Preview Image</h2>
                  <img
                    className="max-w-[360px] max-h-[240px] mb-2"
                    src={URL.createObjectURL(selectedFile)}
                    alt="Selected Image Preview"
                  />
                  <p className="text-xl text-center mb-4">
                    {selectedFile.name}
                  </p>
                </div>
              )}

              {/* submit button */}

              <div className="w-full flex justify-end items-center my-4">
                <button
                  type="submit"
                  className="w-full flex items-center justify-between px-6 py-3 text-sm font-[Fahkwang] tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                >
                  {loading ? <Loader /> : <span>Add Vehicle</span>}
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

              {/*  */}
            </form>
          </div>
        </div>

        {/* {spinnerVisible && <Spinner />} */}
      </div>
    </Layout>
  );
}

export default AddChallan;
