import React from "react";
import Layout from "../../Components/Layout/Layout";
import ChallanStatistics from "./components/ChallanStatistics";
import UserProfile from "./components/UserProfile";
function UserDashboard() {
  return (
    <div>
      <Layout>
        <UserProfile/>
        <ChallanStatistics/>
      </Layout>
    </div>
  );
}

export default UserDashboard;
