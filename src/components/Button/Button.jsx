import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.button`
  width: 100%;
  background-color: ${({ bg }) => (bg ? bg : "#39cdcc")};
  color: ${({ color }) => (color ? color : "#ffffff")};
  border: ${({ border }) => (border ? border : "0px")};
  max-width: ${(maxWidth) => (maxWidth ? maxWidth : "447px")};
  border-radius: 8px;
  height: 50px;
  font-weight: 600;
  font-size: 16px;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
`;

const Button = ({
  bg,
  border,
  color,
  maxWidth,
  title,
  type,
  loading,
  icon,
  disabled,
  ...props
}) => {
  return (
    <ButtonWrapper
      type={type}
      bg={bg}
      border={border}
      color={color}
      maxWidth={maxWidth}
      loading={loading}
      title={title}
      {...props}
    >
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <p>{title} </p>
          {icon && <span>{icon}</span>}
        </>
      )}
    </ButtonWrapper>
  );
};

export default Button;
