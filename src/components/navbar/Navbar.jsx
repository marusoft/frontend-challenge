import React, { useState } from "react";
import Brand from "../../assets/brand/Union.png";
import User from "../../assets/images/user.png";
import { BsSearch } from "react-icons/bs";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BiCaretDown } from "react-icons/bi";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const Navbar = ({ maxWidth}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="navbar-wrapper">
      <div className="brand-container">
        <div className="big-brand">
         <Link to="/login">
         <img src={Brand} alt="lendsqr-brand" className="logo" />
          <span className="logo-text">lendsqr</span></Link>
        </div>
        <form className="search-bar" style={{display: open? "flex": "none"}}>
          <input
            type="text"
            placeholder="Search for anything"
            className="search-input"
          />
          <Button maxWidth={maxWidth}>
            <BsSearch className="search-icon" />
          </Button>
        </form>
      </div>
      <div className="profiles">
      <BsSearch className="search-button" onClick={() => setOpen(true)} />
        <p className="doc">Doc</p>
        <div className="notification">
          <IoIosNotificationsOutline />
        </div>
        <div className="user-details">
          <img src={User} alt="user profile img" className="user-icon" />
          <span className="username">
            Adedeji
            <BiCaretDown className="user-info" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
