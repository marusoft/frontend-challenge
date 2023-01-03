import React, { useState } from "react";
import styled from "styled-components";

const Input = styled.input`
  width: ${({ fullWidth }) => (fullWidth ? fullWidth : "100%")};
  color: ${({ theme }) => theme.colors.inputTextColor};
  border: 2px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: ${({ theme }) => theme.colors.borderRadius};
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

const TextInput = ({
  fullWidth,
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
    <>
      {endIcon ? (
        <>
          <Input
            type={showPassword ? "text" : "password"}
            placeholder={placeholder}
            fullWidth={fullWidth}
            name={name}
            onChange={onChange}
            {...props}
          />
          <TogglePassword className="show" onClick={togglePassword}>
            {showPassword ? "hide" : "show"}
          </TogglePassword>
        </>
      ) : (
        <Input
          type={type}
          placeholder={placeholder}
          fullWidth={fullWidth}
          name={name}
          onChange={onChange}
          {...props}
        />
      )}
    </>
  );
};

export default TextInput;
