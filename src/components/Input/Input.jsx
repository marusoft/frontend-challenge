import React, { useState } from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  input {
    max-width: ${(maxWidth) => (maxWidth ? maxWidth : "447px")};
    width: 100%;
    height: 50px;
    margin-bottom: 1rem;
    padding: 1rem;
    font-family: "Poppins";
    font-weight: 400;
    font-size: 15px;
    color: ${({ theme }) => theme.colors.inputTextColor};
    background: ${({ bg }) => (bg ? bg : "#ffffff")};
    border: 2px solid ${({ theme }) => theme.colors.borderColor};
    border-radius: ${({ theme }) => theme.colors.borderRadius};
    opacity: 0.6;
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: inherit;
    }
  }
`;
export const TogglePassword = styled.span`
  position: absolute;
  margin: 13px;
  right: 0px;
  font-weight: 650;
  font-size: 14px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.loginColor};
  cursor: pointer;
`;

const Input = ({
  bg,
  name,
  maxWidth,
  placeHolder,
  type,
  endIcon,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(showPassword ? false : true);
  };

  return (
    <InputWrapper>
      {endIcon ? (
        <>
          <input
            type={showPassword ? "text" : "password"}
            bg={bg}
            placeholder={placeHolder}
            maxWidth={maxWidth}
            {...props}
          />
          <TogglePassword className="show" onClick={togglePassword}>
            {showPassword ? "hide" : "show"}
          </TogglePassword>
        </>
      ) : (
        <input
          type={type}
          bg={bg}
          placeholder={placeHolder}
          maxWidth={maxWidth}
          {...props}
        />
      )}
    </InputWrapper>
  );
};

export default Input;
