import React, { useState } from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
  position: relative;
  max-width: ${({ maxWidth }) => maxWidth};
  width: 100%;
  input {
    width: 100%;
    color: ${({ theme }) => theme.colors.inputTextColor};
    border: 2px solid ${({ theme }) => theme.colors.borderColor};
    /* border: 1px solid #213F7D; */
    border-radius: ${({ theme }) => theme.colors.borderRadius};
    /* max-width: ${(maxWidth) => (maxWidth ? maxWidth : "447px")}; */
    height: 50px;
    margin-bottom: 1rem;
    padding: 1rem;
    font-family: "Poppins";
    font-weight: 400;
    font-size: 15px;
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
  maxWidth,
  placeholder, 
  name,
  onChange,
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
            placeholder={placeholder}
            maxWidth={maxWidth}
            name={name}
            onChange={onChange}
            {...props}
          />
          <TogglePassword className="show" onClick={togglePassword}>
            {showPassword ? "hide" : "show"}
          </TogglePassword>
        </>
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          maxWidth={maxWidth}
          name={name}
          onChange={onChange}
          {...props}
        />
      )}
    </InputWrapper>
  );
};

export default Input;
