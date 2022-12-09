import React, { useState } from "react";
import User from "../../assets/images/user.png";
import { BsSearch } from "react-icons/bs";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BiCaretDown } from "react-icons/bi";
import { MdOutlineCancel } from "react-icons/md";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Logo from "../logo/Logo";
import SmallLogo from "../logo/SmallLogo";
import {
  NavbarWrapper,
  BrandContainer,
  SearchBar,
  Profiles,
} from "./navbar.styled";

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
        <div className="small-brand">
          <Link to="/login">
            <SmallLogo />
          </Link>
        </div>
      </BrandContainer>
      <SearchBar open={open}>
        <Input type="search" placeholder="Search for anything" />
        <Button
          border="8px"
          icon={<BsSearch className="search-button" />}
          fullWidth="56px"
        />
        <MdOutlineCancel
          className="cancel-btn"
          onClick={() => setOpen(false)}
        />
      </SearchBar>
      <Profiles open={open}>
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
