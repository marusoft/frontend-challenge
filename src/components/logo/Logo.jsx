import React from "react";
import Brand from "../../assets/brand/Union.png";
import { LogoWrapper, LogoImage, LogoText } from "./logo.styled";

const Logo = () => {
  return (
    <LogoWrapper>
      <LogoImage src={Brand} alt="lendsqr-brand" />
      <LogoText>Marusoft</LogoText>
    </LogoWrapper>
  );
};

export default Logo;
