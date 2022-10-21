import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <HeaderWrapper>
      <HeaderTitle>걸그룹 맞추기</HeaderTitle>
    </HeaderWrapper>
  );
}

export default Header;

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
`;

const HeaderTitle = styled.h1``;
