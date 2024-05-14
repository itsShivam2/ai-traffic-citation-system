import React, { useState } from "react";
import Layout from "../../Components/Layout/Layout";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/userActions";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedTab, setSelectedTab] = useState("officer");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const apiEndpoint = selectedTab === "officer" ? "officer" : "user";
    dispatch(login(formData, apiEndpoint))
      .then(({ success, role }) => {
        if (success) {
          toast.success("Signin successful");
          setTimeout(() => {
            if (role === "officer") {
              navigate("/officer");
            } else {
              navigate("/user");
            }
          }, 1000);
        } else {
          toast.error("Signin failed. Please try again.");
        }
      })
      .catch((error) => {
        toast.error("Signin failed. Please try again.");
        console.error("Signin error:", error);
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
                <h1 className="text-2xl font-semibold font-[Fahkwang] tracking-wider text-gray-100 capitalize dark:text-white">
                  Sign in to your account
                </h1>

                <p className="mt-4 text-gray-100 font-[Montserrat] dark:text-gray-400">
                  Let’s get you all set up so you can verify your personal
                  account and begin setting up your profile.
                </p>

                <div className="mt-3 md:flex md:items-center md:-mx-2">
                  <button
                    className={`flex justify-center w-full px-6 py-3  rounded-lg md:w-auto md:mx-2 focus:outline-none ${
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

                <form
                  onSubmit={handleLogin}
                  className="grid grid-cols-1 gap-y-6 md:gap-6 mt-8 md:grid-cols-2 font-[Montserrat]"
                >
                  <div className="col-span-2">
                    <label className="block mb-2 text-sm text-gray-100 dark:text-gray-200">
                      {selectedTab === "officer"
                        ? "Officer ID"
                        : "Email Address"}
                    </label>
                    <input
                      type="email"
                      placeholder={
                        selectedTab === "officer"
                          ? "Enter your officer ID"
                          : "johndoe@example.com"
                      }
                      name={selectedTab === "officer" ? "email" : "email"}
                      value={formData.email}
                      onChange={handleChange}
                      className="block w-full px-5 py-3 mt-2 text-gray-950 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div className="col-span-2">
                    <label className="block mb-2 text-sm text-gray-100 dark:text-gray-200">
                      Password
                    </label>
                    <input
                      type="password"
                      placeholder="Enter your password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="block w-full px-5 py-3 mt-2 text-gray-950 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div className="flex flex-col items-center gap-4 md:flex-row md:col-span-2">
                    <button
                      type="submit"
                      className="w-full md:w-1/2 flex items-center justify-between px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                    >
                      <span>Sign In </span>

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
                      Don't have an account?{" "}
                      <span className="text-sky-600 underline">
                        <Link to="/signup">Sign up</Link>
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

export default Login;
