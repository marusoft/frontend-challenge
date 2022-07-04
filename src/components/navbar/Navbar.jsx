import React, { useState } from "react";
import Brand from "../../assets/brand/Union.png";
import User from "../../assets/images/user.png";
import { BsSearch } from "react-icons/bs";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BiCaretDown } from "react-icons/bi";
import "./Navbar.scss";

const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="navbar-wrapper">
       <div className="small-brand">
          <img src={Brand} alt="brand" />
        </div>
      <div className="brand-container">
        <div className="big-brand">
          <img src={Brand} alt="lendsqr-brand" className="logo" />
          <span className="logo-text">lendsqr</span>
        </div>
        <div className="search-bar" style={{display: open? "flex": "none"}}>
          <input
            type="text"
            placeholder="Search for anything"
            className="search-input"
          />
          <button>
            <BsSearch className="search-icon" />
          </button>
        </div>
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
