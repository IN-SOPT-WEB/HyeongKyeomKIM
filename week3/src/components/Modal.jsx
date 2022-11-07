import styled from "styled-components";

function Modal({ onClick, isCorrect }) {
  return (
    <StModalContainer onClick={onClick} isCorrect={isCorrect}>
      <StModalContent>
        {isCorrect ? "정답입니다!" : "틀렸습니다ㅠ"}
      </StModalContent>
    </StModalContainer>
  );
}

export default Modal;

const StModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 300px;
  height: 100px;
  background-color: #22805edd;
  color: white;

  font-weight: 600;

  border-radius: 16px;

  &:hover {
    background-color: #32ad80dd;
    cursor: pointer;
  }
`;

const StModalContent = styled.span`
  font-size: 24px;
`;
