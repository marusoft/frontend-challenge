import React from "react";
import Brand from "../../assets/brand/website_logo.png";
import { LogoWrapper, LogoImage } from "./logo.styled";

const Logo = ({ pb }) => {
  return (
    <LogoWrapper pb={pb}>
      <LogoImage src={Brand} alt="marusoft-brand" />
    </LogoWrapper>
  );
};

export default Logo;
