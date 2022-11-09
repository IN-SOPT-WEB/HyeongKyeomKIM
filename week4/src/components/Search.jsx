import styled from "styled-components";
import UserInfo from "./UserInfo";

function Search() {
  return (
    <StSearchWrapper>
      <UserInfo />
    </StSearchWrapper>
  );
}

export default Search;

const StSearchWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
