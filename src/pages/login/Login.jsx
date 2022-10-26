import React, { useState } from "react";
import { Link } from "react-router-dom";
import Pablo from "../../assets/images/pablo-sign-in 1.png";
import Logo from "../../components/Logo/Logo";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import {
  LoginWrapper,
  LoginLeft,
  LoginImage,
  LoginRight,
  WelcomeContainer,
  WelcomeText,
  WelcomeDesc,
  FormContainer,
  EmailWrapper,
  PasswordWrapper,
  ForgotPassword,
  TogglePassword,
  // Input,
  // Button
} from "./Login.styled";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(showPassword ? false : true);
  };

  return (
    <LoginWrapper>
      <LoginLeft>
        <Logo />
        <LoginImage>
          <img src={Pablo} alt="pablo-sign-in" />
        </LoginImage>
      </LoginLeft>
      <LoginRight>
        <WelcomeContainer>
          <WelcomeText>Welcome!</WelcomeText>
          <WelcomeDesc className="welcome-desc">
            Enter details to login.
          </WelcomeDesc>
        </WelcomeContainer>
        <FormContainer className="login-form">
          <form>
            <EmailWrapper className="email">
              <Input
                type="email"
                bg="#ffffff"
                placeHolder="Email"
                width="447px"
                required
              />
            </EmailWrapper>
            <PasswordWrapper className="password">
              <Input
                type={showPassword ? "text" : "password"}
                // className="text-input"
                placeHolder="Password"
                bg="#ffffff"
                width="447px"
                required
              />
              <TogglePassword className="show" onClick={togglePassword}>
                {showPassword ? "hide" : "show"}
              </TogglePassword>
            </PasswordWrapper>
            <ForgotPassword className="fpassword">
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
    </LoginWrapper>
  );
};

export default Login;
