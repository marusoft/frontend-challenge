import React from "react";
import styled from "styled-components";

const InputWrapper = styled.input`
  width: ${(width) => (width ? width : "447px")};
  /* width: 100%; */
  height: 50px;
  background: ${({ bg }) => (bg ? bg : "#ffffff")};
  border: 2px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: ${({ theme }) => theme.colors.borderRadius};
  margin-bottom: 1rem;
  padding: 1rem;
  font-family: "Poppins";
  font-weight: 400;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.inputTextColor};
  opacity: 0.6;
  &:focus {
    outline: none;
  }
  @media only screen and (max-width: 768px) {
    width: 400px;
  }
  @media only screen and (max-width: 540px) {
    width: 350px;
  }
  @media only screen and (max-width: 480px) {
    width: 330px;
  }
  @media only screen and (max-width: 300px) {
    width: 250px;
  }
`;

const Input = ({ bg, width, placeHolder }) => {
  return (
    <InputWrapper
      bg={bg}
      width={width}
      placeholder={placeHolder}
    ></InputWrapper>
  );
};

export default Input;
