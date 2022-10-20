import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <StHeaderWrapper>
      <StHeaderTitle>걸그룹 맞추기</StHeaderTitle>
    </StHeaderWrapper>
  );
}

export default Header;

const StHeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
`;

const StHeaderTitle = styled.h1``;
