import React, { useState } from "react";
import Layout from "../../Components/Layout/Layout";
import {
  ChallanStatistics,
  AddChallanButton,
  OfficerProfile,
} from "./Components/Index";

function Admin() {
  return (
    <Layout>
      <div className="bg-[#111827]">
        <OfficerProfile />

        <AddChallanButton />

        <ChallanStatistics />
      </div>
    </Layout>
  );
}

export default Admin;
