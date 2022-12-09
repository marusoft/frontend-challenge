import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Main from "../../components/main/Main";
import { DashboardContainer, SideContainer, MainContainer } from "../dashboard/dashboard.styled"

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Navbar />
      <DashboardContainer>
        <SideContainer>
          <Sidebar />
        </SideContainer>
        <MainContainer>
          <Main />
        </MainContainer>
      </DashboardContainer>
    </div>
  );
};

export default Dashboard;
