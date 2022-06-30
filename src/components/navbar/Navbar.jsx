import React from "react";
import Brand from "../../assets/brand/Union.png"
import "./Navbar.scss"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={Brand} alt="lendsqr-brand" />
        <span className="logoText">lendsqr</span>
      </div>
    </div>
  );
};

export default Navbar;
