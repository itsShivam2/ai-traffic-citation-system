import React from "react";
import { Link } from "react-router-dom";

function AddChallanButton() {
  return (
    <div className="bg-[#111827]">
      <div className="w-full flex justify-end items-center py-4">
        <Link
          to="/officer/addchallan"
          className="sm:w-1/4 lg:w-1/6 flex justify-end items-center px-4 my-4"
        >
          <button className="w-full flex items-center justify-between px-6 py-3 text-sm font-[Fahkwang] tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
            <span>Add Challan</span>

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
  );
}

export default AddChallanButton;
