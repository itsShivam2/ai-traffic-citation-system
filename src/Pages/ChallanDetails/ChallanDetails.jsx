import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Layout from "../../Components/Layout/Layout";
const challan = {
  id: 1,
  createdAt: "2022-05-10T08:00:00Z",
  status: "NOT PAID",
  vehicleLicensePlate: "UP-53 CZ-1234",
  user: {
    name: "User1",
    email: "user1@example.com",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
  },
};

function ChallanDetails(props) {
  // const location = useLocation();
  // const challan = location.state.challan;
  // console.log(challan);
  // useEffect(() => {
  //   const fetchChallanDetails = async () => {
  //     try {
  //       const response = await axios.get(
  //         `http://localhost:5000/challans/${match.params.id}`
  //       );
  //       setChallan(response.data);
  //     } catch (error) {
  //       console.error("Error fetching challan details:", error);
  //     }
  //   };

  //   fetchChallanDetails();
  // }, [match.params.id]);

  // if (!challan) {
  //   return <div>Loading...</div>;
  // }

  // const challan = props.location.state?.challan;

  // // Check if challan is not undefined before accessing its properties
  // if (!challan) {
  //   // Render appropriate content when challan is undefined
  //   return <div>No challan data available.</div>;
  // }

  return (
    <Layout>
      <div className="bg-[#111827] pt-8">
        <h2 className="text-3xl text-center text-gray-100 font-semibold font-[Fahkwang] mb-8">
          Challan Details
        </h2>
        <section className="bg-[#111827] container px-4 pb-16 mx-auto">
          <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow rounded-lg">
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4">
                Challan Information
              </h3>
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 md:pr-6">
                  <p>
                    <span className="font-semibold">Challan ID:</span>{" "}
                    {challan.id}
                  </p>
                  <p>
                    <span className="font-semibold">Issued At:</span>{" "}
                    {challan.issuedAt}
                  </p>
                  <p>
                    <span className="font-semibold">Violation:</span>{" "}
                    {challan.violation}
                  </p>
                  <p>
                    <span className="font-semibold">Fine Amount:</span>{" "}
                    {challan.fineAmount}
                  </p>
                </div>
                <div className="md:w-1/2 md:pl-6">
                  <p>
                    <span className="font-semibold">Status:</span>{" "}
                    {challan.status}
                  </p>
                  <p>
                    <span className="font-semibold">
                      Vehicle License Plate:
                    </span>{" "}
                    {challan.vehicleLicensePlate}
                  </p>
                  <p>
                    <span className="font-semibold">Officer ID:</span>{" "}
                    {challan.officerId}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default ChallanDetails;
