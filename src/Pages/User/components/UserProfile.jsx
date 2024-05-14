import React, { useState, useEffect } from "react";
import RegisteredVehicles from "./RegisteredVehicles";
import AddVehicleButton from "./AddVehicleButton";
import ModalComponent from "./ModalComponent";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaEdit } from "react-icons/fa";
import Spinner from "../../../Components/Spinner/Spinner";

// const dummyUserData = {
//   id: 1,
//   uid: "dummy123",
//   email: "dummy@example.com",
//   name: "Dummy User",
//   vehicles: [
//     {
//       id: 1,
//       licencePlate: "ABC123",
//       vehicleType: "FOUR_WHEELER",
//       challans: [],
//       userId: "dummy123",
//     },
//     {
//       id: 2,
//       licencePlate: "XYZ456",
//       vehicleType: "TWO_WHEELER",
//       challans: [],
//       userId: "dummy123",
//     },
//     {
//       id: 3,
//       licencePlate: "XYZ456",
//       vehicleType: "TWO_WHEELER",
//       challans: [],
//       userId: "dummy123",
//     },
//     {
//       id: 4,
//       licencePlate: "XYZ456",
//       vehicleType: "TWO_WHEELER",
//       challans: [],
//       userId: "dummy123",
//     },
//     {
//       id: 5,
//       licencePlate: "XYZ456",
//       vehicleType: "TWO_WHEELER",
//       challans: [],
//       userId: "dummy123",
//     },
//   ],
// };

function UserProfile() {
  const [loading, setLoading] = useState(false);
  const [userDetails, setUserDetails] = useState({});
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const openModal = () => {
  //   setIsModalOpen(true);
  // };
  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        setLoading(true);
        const response = await axios.get("api/v1/users/me", {
          withCredentials: true,
        });
        if (response.status === 200) {
          setUserDetails(response.data.user);
          console.log(response.data.user);
          setLoading(false);
        }
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
          {loading ? (
            <Spinner />
          ) : (
            <>
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
                    Email ID:{" "}
                    <span>{userDetails?.email || "user@gmail.com"}</span>
                  </p>
                  <p className="px-5 text-xs sm:text-base text-gray-100 font-[Fahkwang]">
                    User ID: <span>{userDetails?.uid || "1234 5678 9098"}</span>
                  </p>
                </div>
                <div className="flex justify-center pt-2 space-x-4 align-center"></div>
              </div>
            </>
          )}
        </div>

        <div className="bg-[#111827] w-full md:w-3/5 md:h-[550px] flex flex-col justify-center p-6 shadow-md rounded-xl sm:px-12">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold font-[Fahkwang] sm:text-2xl text-gray-100">
              Registered Vehicles
            </h1>
            {/*  */}
            <div>
              <div className="w-full flex justify-end items-center my-4">
                <Link to="/user/add-vehicle">
                  <button className="w-full flex items-center justify-between px-6 py-3 text-sm font-[Fahkwang] tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                    <span>Add Vehicle</span>
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
                </Link>
              </div>
            </div>
            {/*  */}
          </div>
          <RegisteredVehicles vehicles={userDetails?.vehicles || []} />

          {/* {isModalOpen && <ModalComponent closeModal={closeModal} />} */}
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
