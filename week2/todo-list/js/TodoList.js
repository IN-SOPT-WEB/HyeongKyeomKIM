const leftTodoList = document.querySelector(".left-todo-list");
const rightTodoList = document.querySelector(".right-todo-list");
const todoForm = document.querySelector(".new-todo");
const todoInput = todoForm.querySelector("input");
const todoButton = todoForm.querySelector("button");

function handleTodoSubmit(e) {
  e.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;

  const button = document.createElement("button");
  button.innerText = "❌";

  li.appendChild(span);
  li.appendChild(button);
  leftTodoList.appendChild(li);
}

todoButton.addEventListener("click", handleTodoSubmit);
