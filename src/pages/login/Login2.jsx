import React from "react";
import Logo from "../../components/Logo/Logo";
import Pablo from "../../assets/images/pablo-sign-in 1.png"
import { LoginContainer, LoginLeft, LoginRight } from "./Login2.styled";

const Login2 = () => {
  return (
    <LoginContainer>
      <LoginLeft>
        <div style={{ marginTop: "5rem" }}>
          <Logo />
        </div>
        <div>
          <img src={Pablo} alt="pablo pic" />
        </div>
      </LoginLeft>
      <LoginRight>RIGHT</LoginRight>
    </LoginContainer>
  );
};

export default Login2;
