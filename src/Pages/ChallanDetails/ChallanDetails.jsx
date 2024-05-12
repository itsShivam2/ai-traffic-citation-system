import React, { useState, useEffect } from "react";
import axios from "axios";

function ChallanDetails({ location }) {
  // const [challan, setChallan] = useState(null);
  const { challan } = location.state;
  console.log(challan);
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

  return (
    <div className="bg-[#111827] pt-8">
      <h2 className="text-3xl text-center text-gray-100 font-semibold font-[Fahkwang] mb-8">
        Challan Details
      </h2>
      <section className="bg-[#111827] container px-4 pb-16 mx-auto">
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow rounded-lg">
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4">Challan Information</h3>
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
                  <span className="font-semibold">Vehicle License Plate:</span>{" "}
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
  );
}

export default ChallanDetails;
