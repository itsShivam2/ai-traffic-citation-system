import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Signin from "./Pages/Signin/Signin";
import Signup from "./Pages/Signup/Signup";
import Officer from "./Pages/Officer/Officer";
import User from "./Pages/User/User";
import AddChallan from "./Pages/AddChallan/AddChallan";
import AddVehicleForm from "./Pages/User/AddVehicleForm";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />}/>
        <Route path="/officer" element={<Officer />}/>
        <Route path="/officer/addchallan" element={<AddChallan />}/>
        <Route path="user" element={<User />}/>
        <Route path="/user/addvehicle" element={<AddVehicleForm />}/>
        <Route path="about" element={<About />}/>
      </Routes>
    </div>
  );
}

export default App;
