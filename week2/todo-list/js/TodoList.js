const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const leftInput = $(".left__input");
const rightInput = $(".right__input");
const leftButton = $(".left__button");
const rightButton = $(".right__button");

//새로운 투두리스트 생성
function createNewTodo(e) {
  e.preventDefault();
  const li = document.createElement("li");
  const span = document.createElement("span");
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "❌";

  // 왼쪽 input 에서 이벤트 실행
  if (e.target.classList.contains("left__button")) {
    const leftTodos = $(".left-todos");
    let leftInputValue = leftInput.value;

    li.classList.add("left__todo-content");
    span.innerText = `${leftInputValue}`;
    leftTodos.appendChild(li);
  }

  // 오른쪽 input 에서 이벤트 실행
  if (e.target.classList.contains("right__button")) {
    const rightTodos = $(".right-todos");
    let rightInputValue = rightInput.value;

    li.classList.add("right__todo-content");
    span.innerText = `${rightInputValue}`;
    rightTodos.appendChild(li);
  }

  li.appendChild(span);
  li.appendChild(deleteButton);
}

// 투두리스트 제거
function deleteTodo(e) {
  leftTodos.removeChild(e.currentTarget);
}

leftButton.addEventListener("click", createNewTodo);
rightButton.addEventListener("click", createNewTodo);
