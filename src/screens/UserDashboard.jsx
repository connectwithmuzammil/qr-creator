import React from "react";
import { Sidebar } from "../components";
import LandingPage from "./LandingPage";

const UserDashboard = () => {
  return (
    <div className="userDashboard">
      <Sidebar />
      <div className="content-page">
        <LandingPage />
      </div>
    </div>
  );
};

export default UserDashboard;
