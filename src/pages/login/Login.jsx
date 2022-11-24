import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../components/logo/Logo";
import Pablo from "../../assets/images/pablo-sign-in 1.png";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import {
  LoginContainer,
  LoginLeft,
  LoginRight,
  WelcomeContainer,
  WelcomeText,
  WelcomeDesc,
  FormContainer,
  PasswordWrapper,
  ForgotPassword,
  // TogglePassword,
} from "./Login.styled";

const Login = () => {
  const handleSunmit = (e) => {
    e.preventDefault();
  };

  return (
    <LoginContainer>
      <LoginLeft>
        <div style={{ marginTop: "4rem" }}>
          <Logo />
        </div>
        <div>
          <img src={Pablo} alt="pablo pic" />
        </div>
      </LoginLeft>
      <LoginRight>
        <WelcomeContainer>
          <WelcomeText>Welcome!</WelcomeText>
          <WelcomeDesc>Enter details to login.</WelcomeDesc>
        </WelcomeContainer>
        <FormContainer>
          <form onSubmit={handleSunmit}>
            <Input
              type="email"
              bg="#ffffff"
              placeHolder="Email"
              maxWidth="447px"
              required
            />
            <PasswordWrapper>
              <Input
                type="password"
                placeHolder="Password"
                bg="#ffffff"
                maxWidth="447px"
                required
                endIcon={true}
              />
            </PasswordWrapper>
            <ForgotPassword>
              <p>Forgot PASSWORD?</p>
            </ForgotPassword>
            <Link to="/dashboard">
              <Button
                type="submit"
                bg="#39cdcc"
                color="#ffffff"
                title="Log in"
                maxWidth="447px"
              />
            </Link>
          </form>
        </FormContainer>
      </LoginRight>
    </LoginContainer>
  );
};

export default Login;
