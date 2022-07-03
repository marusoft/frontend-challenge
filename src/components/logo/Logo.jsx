import React from "react";
import Brand from "../../assets/brand/Union.png";
import "./Logo.scss";

const Logo = () => {
  return (
    <div className="logo-container">
      <img src={Brand} alt="lendsqr-brand" className="logo" />
      <span className="logo-text">lendsqr</span>
    </div>
  );
};

export default Logo;
