import styled from "styled-components";

function QuestionCard({ questionData }) {
  return (
    <QuestionCardWrapper>
      <QuestionImg src={questionData.image} alt={questionData.alt} />
    </QuestionCardWrapper>
  );
}

export default QuestionCard;

const QuestionCardWrapper = styled.section``;

const QuestionImg = styled.img`
  width: 450px;
  height: 450px;

  border: 2px solid black;
  border-radius: 16px;
`;
