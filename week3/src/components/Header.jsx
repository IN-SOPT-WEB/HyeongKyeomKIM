import styled from "styled-components";

function Header() {
  return (
    <StHeaderWrapper>
      <StHeaderTitle>This is Titie</StHeaderTitle>
    </StHeaderWrapper>
  );
}

export default Header;

const StHeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
`;

const StHeaderTitle = styled.h1`
  margin-top: 2rem;
  margin-bottom: 2rem;

  font-size: 4rem;
`;
