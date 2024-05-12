import React, { useState, useEffect } from "react";
import RegisteredVehicles from "./RegisteredVehicles";
import AddVehicleButton from "./AddVehicleButton";
import ModalComponent from "./ModalComponent";
import axios from "axios";
import { FaEdit } from "react-icons/fa";

const dummyUserData = {
  id: 1,
  uid: "dummy123",
  email: "dummy@example.com",
  name: "Dummy User",
  vehicles: [
    {
      id: 1,
      licencePlate: "ABC123",
      vehicleType: "FOUR_WHEELER",
      challans: [],
      userId: "dummy123",
    },
    {
      id: 2,
      licencePlate: "XYZ456",
      vehicleType: "TWO_WHEELER",
      challans: [],
      userId: "dummy123",
    },
    {
      id: 3,
      licencePlate: "XYZ456",
      vehicleType: "TWO_WHEELER",
      challans: [],
      userId: "dummy123",
    },
    {
      id: 4,
      licencePlate: "XYZ456",
      vehicleType: "TWO_WHEELER",
      challans: [],
      userId: "dummy123",
    },
    {
      id: 5,
      licencePlate: "XYZ456",
      vehicleType: "TWO_WHEELER",
      challans: [],
      userId: "dummy123",
    },
  ],
};

function UserProfile() {
  const [userDetails, setUserDetails] = useState(dummyUserData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get("api/v1/users/me", {
          withCredentials: true,
        });
        setUserDetails(response.data.user);
        console.log(response.data.user);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUserDetails();
  }, []);

  return (
    <div>
      <div className="bg-[#000814] w-full flex flex-col md:flex-row items-center justify-center">
        <div className="bg-[#111827] w-full md:w-2/5 md:h-[550px] flex flex-col items-center justify-center p-6 shadow-md rounded-xl sm:px-12">
          <img
            src="https://source.unsplash.com/150x150/?portrait?3"
            alt=""
            className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
          />
          {/* <FaEdit
            className="right-1/2 text-gray-300 cursor-pointer my-2"
          /> */}
          <div className="space-y-4 text-center divide-y dark:divide-gray-700">
            <div className="flex flex-col my-2 space-y-1">
              <h2 className="text-xl font-semibold sm:text-2xl text-gray-100 font-[Fahkwang] py-4">
                {userDetails?.name || "User Name"}
              </h2>
              <p className="px-5 text-xs sm:text-base text-gray-100 font-[Fahkwang]">
                Email ID: <span>{userDetails?.email || "user@gmail.com"}</span>
              </p>
              <p className="px-5 text-xs sm:text-base text-gray-100 font-[Fahkwang]">
                Virtual ID: <span>{userDetails?.uid || "1234 5678 9098"}</span>
              </p>
            </div>
            <div className="flex justify-center pt-2 space-x-4 align-center"></div>
          </div>
        </div>

        <div className="bg-[#111827] w-full md:w-3/5 md:h-[550px] flex flex-col justify-center p-6 shadow-md rounded-xl sm:px-12">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold font-[Fahkwang] sm:text-2xl text-gray-100">
              Registered Vehicles
            </h1>
            <AddVehicleButton openModal={openModal} />
          </div>
          <RegisteredVehicles vehicles={userDetails?.vehicles || []} />

          {isModalOpen && <ModalComponent closeModal={closeModal} />}
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
