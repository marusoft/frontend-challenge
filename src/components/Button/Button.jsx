import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.div`
  width: 100%;
  button {
    background-color: ${({ bg }) => (bg ? bg : "#39cdcc")};
    color: ${({ color }) => (color ? color : "#ffffff")};
    max-width: ${(maxWidth) => (maxWidth ? maxWidth : "447px")};
    width: 100%;
    border-radius: 8px;
    height: 50px;
    font-weight: 600;
    font-size: 16px;
    text-transform: uppercase;
    cursor: pointer;
  }
`;

const Button = ({ bg, border, color, maxWidth, title, type }) => {
  return (
    <ButtonWrapper>
      <button
        type={type}
        bg={bg}
        border={border}
        color={color}
        maxWidth={maxWidth}
        title={title}
      >
        {title}
      </button>
    </ButtonWrapper>
  );
};

export default Button;
