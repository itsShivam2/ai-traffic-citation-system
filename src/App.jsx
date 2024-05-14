import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import { setUser } from "./redux/userActions";
import axios from "axios";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Signin from "./Pages/Signin/Signin";
import Signup from "./Pages/Signup/Signup";
import Officer from "./Pages/Officer/Officer";
import User from "./Pages/User/User";
import AddChallan from "./Pages/AddChallan/AddChallan";
import AddVehicle from "./Pages/AddVehicle/AddVehicle";
import ChallanDetails from "./Pages/ChallanDetails/ChallanDetails";
import Unauthorized from "./Pages/Unauthorized/Unauthorized";
import { ToastContainer } from "react-toastify";
function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const role = useSelector((state) => state.auth.role);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route
          path="/signup"
          element={isAuthenticated ? <Navigate to="/" /> : <Signup />}
        />
        <Route
          path="/signin"
          element={isAuthenticated ? <Navigate to="/" /> : <Signin />}
        />

        <Route
          path="/officer"
          element={
            isAuthenticated && role === "officer" ? (
              <Officer />
            ) : (
              <Unauthorized />
            )
          }
        />
        <Route
          path="/officer/add-challan"
          element={
            isAuthenticated && role === "officer" ? (
              <AddChallan />
            ) : (
              <Unauthorized />
            )
          }
        />
        <Route
          path="/user"
          element={
            isAuthenticated && role === "user" ? <User /> : <Unauthorized />
          }
        />
        <Route
          path="/user/add-vehicle"
          element={
            isAuthenticated && role === "user" ? (
              <AddVehicle />
            ) : (
              <Unauthorized />
            )
          }
        />
        <Route
          path="/challan/:id"
          element={isAuthenticated ? <ChallanDetails /> : <Unauthorized />}
        />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
