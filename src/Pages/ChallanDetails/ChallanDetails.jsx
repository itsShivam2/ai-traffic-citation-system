import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Layout from "../../Components/Layout/Layout";
import Spinner from "../../Components/Spinner/Spinner";
import * as IconsAndImages from "../../Assets/IconsAndImages";
function ChallanDetails() {
  const navigate = useNavigate();
  const { challanId } = useParams();
  console.log("challanId:", challanId);
  const [challan, setChallan] = useState(null);
  const [loading, setLoading] = useState(false);

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const role = useSelector((state) => state.auth.role);

  useEffect(() => {
    const fetchChallanDetails = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`/api/v1/challans/${challanId}`, {
          withCredentials: true,
        });
        if (response.status === 200) {
          console.log("Challan details:", response.data.challan);
          setChallan(response.data.challan);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching challan details:", error);
        setLoading(false);
      }
    };

    fetchChallanDetails();
  }, [challanId]);

  const handlePayClick = async () => {
    try {
      const response = await axios.patch(`/api/v1/challans/${challanId}`, {
        withCredentials: true,
      });
      if (response.status === 200) {
        setChallan((prevChallan) => ({
          ...prevChallan,
          status: "PAID",
        }));
      }
    } catch (error) {
      console.error("Error updating challan to paid:", error);
    }
  };

  return (
    <Layout>
      <div className="bg-[#111827] pt-8">
        <h2 className="text-4xl text-center text-gray-100 font-semibold font-[Fahkwang] mb-8">
          Challan
        </h2>

        {challan ? (
          <section className="bg-[#111827] container px-4 pb-16 mx-auto">
            <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow rounded-lg">
              <div className="p-6">
                <h3 className="text-2xl text-center font-[Fahkwang] font-bold mb-4">
                  Challan Information
                </h3>
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/2 md:pr-6">
                    <p>
                      <span className="font-semibold font-[Fahkwang]">
                        Challan ID:
                      </span>{" "}
                      {challan.id}
                    </p>
                    <p>
                      <span className="font-semibold font-[Fahkwang]">
                        Vehicle License Plate:
                      </span>{" "}
                      {challan.vehicleLicensePlate}
                    </p>
                    <p>
                      <span className="font-semibold font-[Fahkwang]">
                        Fine Amount:
                      </span>{" "}
                      {challan.fineAmount}
                    </p>
                    <p>
                      <span className="font-semibold font-[Fahkwang]">
                        Officer ID:
                      </span>{" "}
                      {challan.officerId}
                    </p>
                  </div>
                  <div className="md:w-1/2 md:pl-6">
                    <p>
                      <span className="font-semibold font-[Fahkwang]">
                        Issued At:
                      </span>{" "}
                      {challan.issuedAt
                        ? new Date(challan.issuedAt).toLocaleString("en-IN", {
                            timeZone: "Asia/Kolkata",
                            dateStyle: "medium",
                            timeStyle: "medium",
                          })
                        : "Date Not Available"}
                    </p>

                    <p>
                      <span className="font-semibold font-[Fahkwang]">
                        Violation:
                      </span>{" "}
                      {challan.violation}
                    </p>
                    <p>
                      <span className="font-semibold font-[Fahkwang]">
                        Status:
                      </span>{" "}
                      {challan.status}
                    </p>
                  </div>
                </div>
                <div className="w-full flex justify-center items-center my-4">
                  {challan.vehicleImage && (
                    <div className="md:w-1/2 md:pl-6 flex justify-center items-center">
                      <img
                        src={challan.vehicleImage}
                        alt="Vehicle Image"
                        className="max-w-full h-auto rounded-md"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        ) : (
          <section className="min-h-[200px] container px-4 pb-16 mx-auto">
            <div className="flex items-center justify-center max-w-4xl mx-auto shadow rounded-lg">
              <div className="p-6">
                <Spinner />
              </div>
            </div>
          </section>
        )}

        <section className="w-full flex items-center justify-center pb-4 space-x-4">
          <button
            onClick={() => navigate(-1)}
            className="bg-gray-700 hover:bg-gray-800 text-lg text-white font-bold font-[Fahkwang] py-2 px-6 rounded mb-2"
          >
            Back
          </button>
          {isAuthenticated &&
            role === "user" &&
            challan &&
            challan.status !== "PAID" && (
              <button
                onClick={handlePayClick}
                className="bg-blue-500 hover:bg-blue-700 text-lg text-white font-bold font-[Fahkwang] py-2 px-6 rounded mb-2"
              >
                Pay
              </button>
            )}
        </section>
      </div>
    </Layout>
  );
}

export default ChallanDetails;
