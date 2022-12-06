import React from "react";
import Brand from "../../assets/brand/brand_logo.png";
import { LogoWrapper, LogoImage } from "./smallbrand.styled";

const SmallLogo = ({ pb }) => {
  return (
    <LogoWrapper pb={pb}>
      <LogoImage src={Brand} alt="marusoft-brand" />
    </LogoWrapper>
  );
};

export default SmallLogo;
