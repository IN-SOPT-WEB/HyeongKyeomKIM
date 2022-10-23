import { useState } from "react";
import styled from "styled-components";
import questionData from "../models/questionData";

function Contents() {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const { src, alt, options, answer } = questionData[currentQuestion];

  const questionHandler = (option) => {
    if (answer === option) {
      roundHandler();
      scoreHandler();
      if (currentQuestion !== 4) {
        setCurrentQuestion(currentQuestion + 1);
      }
    } else {
      console.log("땡!!");
    }
  };

  const roundHandler = () => {
    if (currentQuestion === 4) {
      console.log("끝났습니다!");
      setCurrentQuestion(0);
    } else {
      console.log("다음라운드로");
    }
  };

  const scoreHandler = () => {
    setScore(score + 1);
  };

  const resetHandler = () => {
    setCurrentQuestion(0);
    setScore(0);
  };

  return (
    <StContentsWrapper>
      {currentQuestion === 4 ? (
        <StContentsResult>
          축하합니다! 문제를 모두 맞추셨습니다!
        </StContentsResult>
      ) : (
        <>
          <StContentsScore>{score} 점</StContentsScore>
          <StContentsImgCard>
            <img src={src} alt={alt} />
          </StContentsImgCard>
          <StContentsAnswer>
            {options.map((option, idx) => (
              <StContentsOption
                key={idx}
                onClick={() => questionHandler(option)}
              >
                {option}
              </StContentsOption>
            ))}
          </StContentsAnswer>
        </>
      )}
      <StContentsReset onClick={resetHandler}>다시하기</StContentsReset>
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

const StContentsScore = styled.div`
  margin: 1rem;
`;

const StContentsImgCard = styled.div`
  width: auto;
  height: 500px;
  overflow-y: hidden;

  border-radius: 16px;
  box-shadow: rgb(0 0 0 / 4%) 0px 4px 16px 0px;

  & > img {
    width: 600px;
    height: 500px;
  }
`;

const StContentsAnswer = styled.div`
  display: flex;
  gap: 1rem;

  margin: 1rem;
`;

const StContentsOption = styled.button``;

const StContentsResult = styled.div``;

const StContentsReset = styled.section`
  cursor: pointer;
`;
