import React, { useState } from "react";
import Layout from "../../Components/Layout/Layout";
import {ChallanStatistics, Statistics, AddChallanButton, OfficerProfile} from "./Components/Index"


function Admin() {
  return (
    <Layout>
      <div className="bg-[#111827]">
        <OfficerProfile />
        {/* <Statistics /> */}

        <AddChallanButton />

        <ChallanStatistics />
      </div>
    </Layout>
  );
}

export default Admin;
