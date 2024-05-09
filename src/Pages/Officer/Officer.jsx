import React, { useState } from "react";
import Layout from "../../Components/Layout/Layout";
import {ChallanStatistics, Statistics, AddChallanButton, AdminProfile} from "./Components/Index"


function Admin() {
  return (
    <Layout>
      <div className="bg-[#111827]">
        <AdminProfile />
        <Statistics />

        <AddChallanButton />

        <ChallanStatistics />
      </div>
    </Layout>
  );
}

export default Admin;
