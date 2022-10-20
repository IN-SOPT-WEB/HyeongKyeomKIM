import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <StHeaderWrapper>
      <StHeaderTitle>당신 누구야!!</StHeaderTitle>
    </StHeaderWrapper>
  );
}

export default Header;

const StHeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
`;

const StHeaderTitle = styled.h1``;
