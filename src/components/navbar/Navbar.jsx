import React, { useState } from "react";
import User from "../../assets/images/user.png";
import { BsSearch } from "react-icons/bs";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BiCaretDown } from "react-icons/bi";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Logo from "../logo/Logo";
import { NavbarWrapper, BrandContainer, Profiles } from "./navbar.styled";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <NavbarWrapper>
      <BrandContainer>
        <div className="big-brand">
          <Link to="/login">
            <Logo />
          </Link>
        </div>
      </BrandContainer>
      <form
        style={{
          width: "100%",
          maxWidth: "450px",
          display: open ? "flex" : "none",
        }}
      >
        <Input type="search" placeholder="Search for anything" />
        <Button border="8px" icon={<BsSearch />} fullWidth="56px" />
      </form>
      <Profiles>
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
      </Profiles>
    </NavbarWrapper>
  );
};

export default Navbar;
