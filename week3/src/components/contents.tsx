import { useState } from "react";
import styled from "styled-components";

function Contents() {
  const [score, setScore] = useState<number>(0);

  return (
    <StConetntsWrapper>
      <StContentsScore>{score}점</StContentsScore>
      <StContentsQuestion>문제 섹션</StContentsQuestion>
      <StContentFooter>다시하기 섹션</StContentFooter>
    </StConetntsWrapper>
  );
}

export default Contents;

const StConetntsWrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const StContentsScore = styled.section``;

const StContentsQuestion = styled.section``;

const StContentFooter = styled.section``;
