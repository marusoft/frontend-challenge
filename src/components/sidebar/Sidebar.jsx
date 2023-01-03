import React from "react";
// import { BsHouse } from "react-icons/bs";
import {
  SidebarWrapper,
  SidebarItem,
  SidebarText,
} from "../sidebar/Sidebar.styled";
import home from "../../assets/images/home1.png";
import userfriends from "../../assets/images/user-friends1.png";
import guarantor from "../../assets/images/guarantor1.png";
import Loans from "../../assets/images/loan1.png";
import DecisionModels from "../../assets/images/handshake1.png";
import Savings from "../../assets/images/piggy-bank1.png";
import LoanRequest from "../../assets/images/loanRequest1.png";
import Whitelist from "../../assets/images/user-check.png";
import Karma from "../../assets/images/user-times.png";
import Transactions from "../../assets/images/transaction1.png";

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <SidebarItem>
        {/* <BsHouse className="sidebar-icon" /> */}
        <img src={home} alt="homepage" className="icon" />
        <SidebarText>Dashboard</SidebarText>
      </SidebarItem>
      {/* <h3>Customer</h3> */}
      <SidebarItem>
        {/* <BsHouse className="sidebar-icon" /> */}
        <img src={userfriends} alt="homepage" className="icon" />
        <SidebarText>Users</SidebarText>
      </SidebarItem>
      <SidebarItem>
        {/* <BsHouse className="sidebar-icon" /> */}
        <img src={guarantor} alt="homepage" className="icon" />
        <SidebarText>Guarantors</SidebarText>
      </SidebarItem>
      <SidebarItem>
        {/* <BsHouse className="sidebar-icon" /> */}
        <img src={Loans} alt="homepage" className="icon" />
        <SidebarText>Loans</SidebarText>
      </SidebarItem>
      <SidebarItem>
        {/* <BsHouse className="sidebar-icon" /> */}
        <img src={DecisionModels} alt="homepage" className="icon" />
        <SidebarText>Decision Models</SidebarText>
      </SidebarItem>
      <SidebarItem>
        {/* <BsHouse className="sidebar-icon" /> */}
        <img src={Savings} alt="homepage" className="icon" />
        <SidebarText>Savings</SidebarText>
      </SidebarItem>
      <SidebarItem>
        {/* <BsHouse className="sidebar-icon" /> */}
        <img src={LoanRequest} alt="homepage" className="icon" />
        <SidebarText>Loan Requests</SidebarText>
      </SidebarItem>
      <SidebarItem>
        {/* <BsHouse className="sidebar-icon" /> */}
        <img src={Whitelist} alt="homepage" className="icon" />
        <SidebarText>Whitelist</SidebarText>
      </SidebarItem>
      <SidebarItem>
        {/* <BsHouse className="sidebar-icon" /> */}
        <img src={Karma} alt="homepage" className="icon" />
        <SidebarText>Karma</SidebarText>
      </SidebarItem>
      <SidebarItem>
        {/* <BsHouse className="sidebar-icon" /> */}
        <img src={Transactions} alt="homepage" className="icon" />
        <SidebarText>Transactions</SidebarText>
      </SidebarItem>
    </SidebarWrapper>
  );
};

export default Sidebar;
