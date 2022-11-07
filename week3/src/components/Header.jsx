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

  color: #ffffff;
  background-color: #22805d;
`;

const StHeaderTitle = styled.h1`
  margin-top: 4rem;
  margin-bottom: 4rem;

  font-size: 2.3rem;
  font-weight: 600;
`;
