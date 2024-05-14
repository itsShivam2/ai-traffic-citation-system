import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/userActions";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiLogIn } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [userDetails, setUserDetails] = useState(null);
  const [isUserDropdownOpen, setUserDropdownOpen] = useState(false);
  const [isNavbarLinksOpen, setNavbarLinksOpen] = useState(false);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout())
      .then(({ success }) => {
        if (success) {
          toast.success("Logout successful");
          setTimeout(() => {
            navigate("/");
          }, 1000);
        } else {
          toast.error("Logout failed. Please try again.");
        }
      })
      .catch((error) => {
        toast.error("Logout failed. Please try again.");
        console.error("Logout error:", error);
      });
  };

  const toggleUserDropdown = () => {
    setUserDropdownOpen(!isUserDropdownOpen);
    if (!isUserDropdownOpen) {
      setNavbarLinksOpen(false);
    }
  };

  const toggleNavbarLinks = () => {
    setNavbarLinksOpen(!isNavbarLinksOpen);
    if (!isNavbarLinksOpen) {
      setUserDropdownOpen(false);
    }
  };

  console.log(userDetails);

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
    <>
      <nav className="bg-black py-2 shadow-2xl">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold font-[Fahkwang] whitespace-nowrap text-white">
              E-Challan
            </span>
          </Link>
          <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="flex items-center justify-center text-sm rounded-full md:me-0 focus:ring-4 focus:ring-gray-600"
              id="user-menu-button"
              onClick={toggleUserDropdown}
              aria-expanded={isUserDropdownOpen ? "true" : "false"}
              data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom"
            >
              <span className="sr-only">Open user menu</span>
              {/* <img
                className="w-8 h-8 rounded-full"
                src="/docs/images/people/profile-picture-3.jpg"
                alt="user photo"
              /> */}
              {isAuthenticated ? (
                <FaUserCircle size={36} color="white" />
              ) : (
                <FiLogIn size={36} color="white" />
              )}
            </button>
            {/* Dropdown menu */}
            <button
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 text-gray-400 focus:ring-gray-600"
              data-collapse-toggle="navbar-user"
              aria-controls="navbar-user"
              aria-expanded={isNavbarLinksOpen ? "true" : "false"}
              onClick={toggleNavbarLinks}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
              isNavbarLinksOpen ? "" : "hidden"
            }`}
            id="navbar-user"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-gray-800 md:bg-black border-gray-700">
              <li>
                <Link
                  to="/"
                  className={`block py-2 px-3 text-xl font-[Fahkwang] rounded md:p-0 ${
                    location.pathname === "/"
                      ? "text-blue-500"
                      : "text-white hover:text-blue-500"
                  }`}
                  aria-current={location.pathname === "/" ? "page" : undefined}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={`block py-2 px-3 text-xl font-[Fahkwang] rounded md:p-0 ${
                    location.pathname === "/about"
                      ? "text-blue-500"
                      : "text-white hover:text-blue-500"
                  }`}
                  aria-current={
                    location.pathname === "/about" ? "page" : undefined
                  }
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div
        className={`absolute right-2 pr-2 flex justify-end ${
          isUserDropdownOpen ? "" : "hidden"
        }`}
        id="user-dropdown"
      >
        <div
          className="right-4 w-[135px] z-50 text-base list-none divide-y rounded-lg shadow bg-gray-700 divide-gray-600"
          id="user-dropdown"
        >
          <>
            {isAuthenticated && (
              <div className="px-4 py-3">
                <span className="block text-sm text-white font-[Fahkwang]">
                  {userDetails?.name}
                </span>
                <span className="block text-sm truncate text-gray-400 font-[Fahkwang]">
                  {userDetails?.email}
                </span>
              </div>
            )}
          </>
          <ul className="py-2" aria-labelledby="user-menu-button">
            {isAuthenticated ? (
              <>
                <li>
                  <Link
                    to="/user"
                    className="w-full block px-4 py-2 text-sm text-left font-[Fahkwang] hover:bg-gray-600 text-gray-200 hover:text-white"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="w-full block px-4 py-2 text-sm text-left font-[Fahkwang] hover:bg-gray-600 text-gray-200 hover:text-white"
                  >
                    Sign out
                  </button>
                </li>
              </>
            ) : (
              <li>
                <Link
                  to="/signin"
                  className="block px-4 py-2 text-sm font-[Fahkwang] hover:bg-gray-600 text-gray-200 hover:text-white"
                >
                  Sign in
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
