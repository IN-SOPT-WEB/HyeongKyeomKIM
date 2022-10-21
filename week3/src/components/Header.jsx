import styled from "styled-components";

function Header() {
  return (
    <StHeaderWrapper>
      <StHeaderTitle>4세대 걸그룹 어디까지 알고있니??</StHeaderTitle>
    </StHeaderWrapper>
  );
}

export default Header;

const StHeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
`;

const StHeaderTitle = styled.h1`
  margin-top: 4rem;
  margin-bottom: 2rem;

  font-size: 3rem;
`;
