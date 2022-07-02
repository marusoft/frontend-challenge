import React from "react";
import Brand from "../../assets/brand/Union.png";
import { BsSearch } from "react-icons/bs";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-wrapper">
        <div className="logo">
          <img src={Brand} alt="lendsqr-brand" />
          <span className="logoText">lendsqr</span>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search for anything" />
          <button><BsSearch /></button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
