import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Signin from "./Pages/Signin/Signin";
import Signup from "./Pages/Signup/Signup";
import Officer from "./Pages/Officer/Officer";
import User from "./Pages/User/User";
import AddChallan from "./Pages/AddChallan/AddChallan";
import AddVehicleForm from "./Pages/User/AddVehicleForm";
import ChallanDetails from "./Pages/ChallanDetails/ChallanDetails";
import { ToastContainer } from "react-toastify";
function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/signup"
          element={isAuthenticated ? <Navigate to="/" /> : <Signup />}
        />
        <Route
          path="/signin"
          element={isAuthenticated ? <Navigate to="/" /> : <Signin />}
        />

        <Route path="/officer" element={<Officer />} />
        <Route path="/officer/addchallan" element={<AddChallan />} />
        <Route path="user" element={<User />} />
        <Route path="/user/addvehicle" element={<AddVehicleForm />} />

        <Route path="/challan/:id" component={ChallanDetails} />
        {/* {isAuthenticated && (
          <>
            <Route path="/officer" element={<Officer />} />
            <Route path="/officer/addchallan" element={<AddChallan />} />
            <Route path="user" element={<User />} />
            <Route path="/user/addvehicle" element={<AddVehicleForm />} />
          </>
        )} */}

        <Route path="about" element={<About />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
