import React, { useState, useEffect } from "react";
import axios from "axios";
function OfficerProfile() {
  const [officerDetails, setOfficerDetails] = useState(null);

  useEffect(() => {
    const fetchOfficerDetails = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/v1/officers/me", {
            withCredentials: true}
        );
        setOfficerDetails(response.data.officer);
      } catch (error) {
        console.error("Error fetching officer details:", error);
      }
    };

    fetchOfficerDetails();
  }, []);

  return (
    <div>
      <div className="bg-[#000814] w-full flex flex-col md:flex-row items-center justify-center">
        <div className="bg-[#111827] w-full h-full p-6 shadow-md rounded-xl sm:px-12">
          {officerDetails ? (
            <>
              <img
                src={officerDetails.image}
                alt=""
                className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
              />
              <div className="space-y-4 text-center font-[Fahkwang] divide-y dark:divide-gray-700">
                <div className="my-2 space-y-1">
                  <h2 className="text-xl font-semibold sm:text-2xl text-gray-100">
                    {officerDetails.name}
                  </h2>
                  <p className="px-5 text-xs sm:text-base text-gray-100">
                    Virtual ID: <span>{officerDetails.virtualId}</span>
                  </p>
                  <p className="px-5 text-xs sm:text-base text-gray-100">
                    Email ID: <span>{officerDetails.email}</span>
                  </p>
                </div>
                <div className="flex justify-center pt-2 space-x-4 align-center"></div>
              </div>
            </>
          ) : (
            <p className="text-2xl text-gray-100 text-center font-[Fahkwang] my-4 py-8">
              Loading officer details...
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default OfficerProfile;
