import { useState } from "react";
import styled from "styled-components";
import QuestionCard from "../components/Content/QuestionCard";
import questions from "../models/questionData";

function Contents() {
  const [score, setScore] = useState(0);
  const [questionsData, setQuestionDta] = useState([...questions]);

  return (
    <ConetntsWrapper>
      <ContentsScore>{score}점</ContentsScore>
      <QuestionCard questionData={questions} />
      <ContentFooter>다시하기 섹션</ContentFooter>
    </ConetntsWrapper>
  );
}

export default Contents;

const ConetntsWrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ContentsScore = styled.section`
  height: 50px;

  background-color: blue;
`;

const ContentFooter = styled.footer``;
