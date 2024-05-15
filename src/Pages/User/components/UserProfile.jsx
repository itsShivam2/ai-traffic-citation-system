import React, { useState, useEffect } from "react";
import RegisteredVehicles from "./RegisteredVehicles";
import AddVehicleButton from "./AddVehicleButton";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaEdit } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import Spinner from "../../../Components/Spinner/Spinner";

function UserProfile() {
  const [loading, setLoading] = useState(false);
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        setLoading(true);
        const response = await axios.get("/api/v1/users/me", {
          withCredentials: true,
        });
        if (response.status === 200) {
          setUserDetails(response.data.user);
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
              <FaRegCircleUser
                color="white"
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
            <AddVehicleButton />
          </div>
          <RegisteredVehicles
            vehicles={userDetails?.vehicles || []}
            loading={loading}
          />
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
