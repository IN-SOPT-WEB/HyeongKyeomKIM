const toDoInput = document.querySelector("input");
const toDoList = document.querySelector("ul");

let toDos = [];

toDoInput.addEventListener("submit", CreateNewTodo);

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;

  const span = document.createElement("span");
  span.innerText = newTodo.text;

  const button = document.createElement("Button");
  button.innerText = "X";
  button.addEventListener("click", deleteTodo);

  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function deleteTodo() {}

function CreateNewTodo(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoContent = { text: newTodo, id: Date.now() };
  toDos.push(newTodoContent);
  paintToDo(newTodoContent);
}
