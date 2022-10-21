import { useState } from "react";
import styled from "styled-components";
import questionData from "../models/questionData";

function Contents() {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const { src, alt, options, answer } = questionData[currentQuestion];

  const QuestionHandler = (option) => {
    if (answer === option) {
      console.log("정답입니다!!");
    } else {
      console.log("땡!!");
    }
  };

  const scoreHandler = () => {
    setScore(score + 1);
  };

  const resetGame = () => {
    console.log("다시하자!");
  };

  return (
    <StContentsWrapper>
      <StContentsScore>{score} 점</StContentsScore>
      <StContentsImgCard>
        <img src={src} alt={alt} />
      </StContentsImgCard>
      <StContentsAnswer>
        {options.map((idx, option) => (
          <StContentsoption key={idx} onClick={() => QuestionHandler(option)}>
            {option}
          </StContentsoption>
        ))}
      </StContentsAnswer>
      <StContentsReset onClick={resetGame}>다시하기</StContentsReset>
    </StContentsWrapper>
  );
}

export default Contents;

const StContentsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StContentsScore = styled.div``;

const StContentsImgCard = styled.div`
  width: auto;
  height: 450px;
  overflow: hidden;

  border-radius: 16px;
  box-shadow: rgb(0 0 0 / 4%) 0px 4px 16px 0px;
`;

const StContentsAnswer = styled.div``;

const StContentsoption = styled.button``;

const StContentsReset = styled.section`
  cursor: pointer;
`;
