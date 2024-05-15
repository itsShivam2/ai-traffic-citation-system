import React, { useState } from "react";
import Layout from "../../Components/Layout/Layout";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signup } from "../../redux/userActions";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../../Components/Loader/Loader";
function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [selectedTab, setSelectedTab] = useState("officer");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    uid: "",
    officerId: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      error: "",
    });
  };

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (selectedTab === "officer") {
      if (!formData.officerId) {
        newErrors.officerId = "Officer ID is required";
      } else if (formData.officerId.length !== 10) {
        newErrors.officerId = "ID must be 10 characters long";
      }
    }

    if (selectedTab === "user") {
      if (!formData.uid) {
        newErrors.uid = "User ID is required";
      } else if (formData.uid.length !== 12) {
        newErrors.uid = "ID must be 12 characters long";
      }
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!validate()) {
      setLoading(false);
      return;
    }

    const fullName = formData.firstName + " " + formData.lastName;
    const combinedFormData = {
      ...formData,
      name: fullName,
    };

    const apiEndpoint = selectedTab === "officer" ? "officer" : "user";

    dispatch(signup(combinedFormData, apiEndpoint))
      .then(({ success, role }) => {
        setLoading(false);
        if (success) {
          toast.success("Signup successful");
          setTimeout(() => {
            navigate(`/${role}`);
          }, 1000);
        } else {
          toast.error("Signup failed. Please try again.");
        }
      })
      .catch((error) => {
        setLoading(false);
        toast.error("Signup failed. Please try again.");
        console.error("Signup error:", error);
      });
  };

  return (
    <div>
      <Layout>
        <section className="bg-[#111827] dark:bg-gray-900">
          <div className="flex justify-center min-h-screen">
            <div
              className="hidden bg-cover lg:block lg:w-2/5"
              style={{
                backgroundImage:
                  'url("https://images.unsplash.com/photo-1494621930069-4fd4b2e24a11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80")',
              }}
            ></div>

            <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
              <div className="w-full">
                <h1 className="text-2xl font-semibold tracking-wider text-gray-100 font-[Fahkwang] capitalize dark:text-white">
                  Create your account now
                </h1>

                <p className="mt-4 text-gray-100 font-[Montserrat] dark:text-gray-400">
                  Let’s get you all set up so you can verify your personal
                  account and begin setting up your profile.
                </p>

                <div className="mt-6">
                  <h1 className="text-gray-100 font-[Fahkwang] dark:text-gray-100">
                    Select type of account
                  </h1>

                  <div className="mt-3 md:flex md:items-center md:-mx-2">
                    <button
                      className={`flex justify-center w-full px-6 py-3 rounded-lg md:w-auto md:mx-2 focus:outline-none ${
                        selectedTab === "officer"
                          ? "bg-blue-500 text-white"
                          : "text-blue-500"
                      }`}
                      onClick={() => handleTabChange("officer")}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>

                      <span className="mx-2 font-[Fahkwang]">Officer</span>
                    </button>

                    <button
                      className={`flex justify-center w-full px-6 py-3 mt-4 rounded-lg md:mt-0 md:w-auto md:mx-2 dark:text-blue-400 focus:outline-none ${
                        selectedTab === "user"
                          ? "bg-blue-500 text-white"
                          : " text-blue-500"
                      }`}
                      onClick={() => handleTabChange("user")}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>

                      <span className="mx-2 font-[Fahkwang]">User </span>
                    </button>
                  </div>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 font-[Montserrat]"
                >
                  <div>
                    <label className="block mb-2 text-sm text-gray-100 dark:text-gray-200">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="John"
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-100 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-sm text-gray-100 dark:text-gray-200">
                      Last name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Doe"
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-100 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-sm text-gray-100 dark:text-gray-200">
                      {selectedTab === "officer" ? "Officer ID" : "Virtual ID"}
                      {errors.officerId && (
                        <span className="ml-2 text-red-500 text-xs">
                          {errors.officerId}
                        </span>
                      )}
                      {errors.uid && (
                        <span className="ml-2 text-red-500 text-xs">
                          {errors.uid}
                        </span>
                      )}
                    </label>
                    <input
                      type="text"
                      required
                      name={selectedTab === "officer" ? "officerId" : "uid"}
                      value={
                        selectedTab === "officer"
                          ? formData.officerId
                          : formData.uid
                      }
                      onChange={handleChange}
                      placeholder={
                        selectedTab === "officer" ? "1234567890" : "XXXXXXXXX"
                      }
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-100 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-sm text-gray-100 dark:text-gray-200">
                      Email address
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="johndoe@example.com"
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-100 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-sm text-gray-100 dark:text-gray-200">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      required
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Enter your password"
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-100 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-sm text-gray-100 dark:text-gray-200">
                      Confirm password
                      {errors.confirmPassword && (
                        <span className="ml-2 text-red-500 text-xs">
                          {errors.confirmPassword}
                        </span>
                      )}
                    </label>
                    <input
                      type="password"
                      name="confirmPassword"
                      required
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="Confirm your password"
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-100 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div className="flex flex-col items-center gap-4 md:flex-row md:col-span-2">
                    <button className="w-full md:w-1/2 flex items-center justify-between px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                      {loading ? <Loader /> : <span>Sign Up </span>}

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
                    <p className="w-full md:w-1/2 text-gray-100 px-0 py-0 md:px-5 md:py-3">
                      Already have an account?{" "}
                      <span className="text-sky-600 underline">
                        <Link to="/signin">Sign in</Link>
                      </span>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
}

export default Signup;
