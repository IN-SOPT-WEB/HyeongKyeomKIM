import { useState } from "react";
import styled from "styled-components";
import questionData from "../models/questionData";
import ModalPortal from "./ModalPortal";
import Modal from "./Modal";

function Contents() {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [modalOn, setModalOn] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const { src, alt, options, answer } = questionData[currentQuestion];

  const questionHandler = (option) => {
    handleModal();
    if (answer === option) {
      setIsCorrect(true);
      roundHandler();
      scoreHandler();
      if (currentQuestion !== 4) {
        setCurrentQuestion(currentQuestion + 1);
      }
    } else {
      setIsCorrect(false);
    }
  };

  const roundHandler = () => {
    if (currentQuestion === 4) {
      setCurrentQuestion(0);
    }
  };

  const scoreHandler = () => {
    setScore(score + 1);
  };

  const resetHandler = () => {
    setCurrentQuestion(0);
    setScore(0);
  };

  const handleModal = () => {
    setModalOn(!modalOn);
  };

  return (
    <StContentsWrapper>
      {score === 5 ? (
        <StContentsResult>
          <span>축하합니다! 문제를 모두 맞추셨습니다!</span>
        </StContentsResult>
      ) : (
        <>
          <StContentsScore>현재 스코어 : {score} 점</StContentsScore>
          <StContentsImgCard>
            <img src={src} alt={alt} />
          </StContentsImgCard>
          <StContentsAnswer>
            {options.map((option, idx) => (
              <StContentsOption
                key={idx}
                onClick={() => {
                  questionHandler(option);
                }}
              >
                {option}
              </StContentsOption>
            ))}
          </StContentsAnswer>
        </>
      )}
      <StContentsReset onClick={resetHandler}>다시하기</StContentsReset>
      <ModalPortal>
        {modalOn && <Modal onClick={handleModal} isCorrect={isCorrect} />}
      </ModalPortal>
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

  font-weight: 600;
  font-size: 18px;
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

const StContentsOption = styled.button`
  border: 0;
  padding: 10px 15px;

  font-weight: 600;
  font-size: 19px;

  color: #ffffff;
  background-color: #22805d;

  &:hover {
    background-color: #32ad80;
    cursor: pointer;
  }
`;

const StContentsResult = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 600px;
  height: 500px;

  & > span {
    font-size: 1.5rem;
  }
`;

const StContentsReset = styled.section`
  cursor: pointer;
`;
