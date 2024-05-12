import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "../../Components/Layout/Layout";
const AddVehicle = () => {
  const [formData, setFormData] = useState({
    licencePlate: "",
    vehicleType: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("api/v1/vehicles", formData, {
        withCredentials: true,
      });
      if (response.status === 201) {
        console.log("Vehicle registered successfully:", response.data);
        toast.success("Vehicle registered successfully!");
      } else {
        console.log("Failed to register vehicle", response.data);
        toast.error("Failed to register vehicle. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to register vehicle. Please try again.");
    }
  };

  const handleCancel = () => {
    setFormData({
      licencePlate: "",
      vehicleType: "",
    });
  };

  return (
    <Layout>
      <div className="bg-[#000814] min-h-fit w-full flex items-center justify-center">
        <div className="relative flex justify-center">
          <div
            className="inset-0 z-10 overflow-y-auto"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
              <span
                className="hidden sm:inline-block sm:h-screen sm:align-middle"
                aria-hidden="true"
              >
                &#8203;
              </span>

              <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl dark:bg-gray-600 sm:my-8 sm:w-full sm:max-w-sm sm:p-6 sm:align-middle">
                <h3
                  className="text-lg text-center font-medium font-[Fahkwang] leading-6 text-gray-800 capitalize dark:text-white"
                  id="modal-title"
                >
                  Add Vehicle
                </h3>

                <form
                  className="mt-4 font-[Montserrat]"
                  onClick={() => handleSubmit()}
                >
                  <label
                    htmlFor="licencePlate"
                    className="text-sm text-gray-700 dark:text-gray-200"
                  >
                    Vehicle Number
                  </label>

                  <label className="block mt-3" htmlFor="email">
                    <input
                      type="text"
                      id="licencePlate"
                      name="licencePlate"
                      value={formData.licencePlate}
                      onChange={handleInputChange}
                      placeholder="UP-53 XY-1234"
                      className="block w-full px-4 py-3 mb-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                    />
                  </label>

                  <label
                    htmlFor="vehicleType"
                    className="text-sm text-gray-700 dark:text-gray-200"
                  >
                    Vehicle Type
                  </label>

                  <label className="block mt-3" htmlFor="vehicleType">
                    <select
                      id="vehicleType"
                      name="vehicleType"
                      value={formData.vehicleType}
                      onChange={handleInputChange}
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-100 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    >
                      <option value="">Please select</option>
                      <option value="TWO_WHEELER">2-Wheeler</option>
                      <option value="THREE_WHEELER">3-Wheeler</option>
                      <option value="fOUR_WHEELER_LIGHT">
                        4-Wheeler Light
                      </option>
                      <option value="fOUR_WHEELER_HEAVY">
                        4-Wheeler Heavy
                      </option>
                    </select>
                  </label>

                  <div className="mt-4 sm:flex sm:items-center sm:-mx-2">
                    <button
                      type="button"
                      onClick={() => handleCancel()}
                      className="w-full px-4 py-2 text-sm font-medium font-[Fahkwang] tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:w-1/2 sm:mx-2 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40"
                    >
                      Cancel
                    </button>

                    <button
                      type="submit"
                      className="w-full px-4 py-2 mt-3 text-sm font-medium font-[Fahkwang] tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:mt-0 sm:w-1/2 sm:mx-2 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                    >
                      Confirm
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    </Layout>
  );
};

export default AddVehicle;
