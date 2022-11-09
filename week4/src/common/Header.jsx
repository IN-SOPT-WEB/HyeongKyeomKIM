import styled from "styled-components";

function Header() {
  return (
    <StHeaderWrapper>
      <StHeaderTitle>GitHub Searcher</StHeaderTitle>
      <StHeaderInput placeholder="Search User..." />
    </StHeaderWrapper>
  );
}

export default Header;

const StHeaderWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 4rem;
`;

const StHeaderTitle = styled.h1`
  font-weight: 600;
  font-size: 4.3rem;

  margin-bottom: 2.5rem;
`;

const StHeaderInput = styled.input`
  width: 40rem;

  padding: 1rem;

  background-color: #0d1117;

  border: none;
  border-bottom: 0.2rem solid #c9d1d9;

  font-weight: 600;
  font-size: 2.5rem;

  color: #c9d1d9;

  &::placeholder {
    text-align: center;

    color: #8b949e;
  }
`;
