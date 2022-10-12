const $ = (selctor) => document.querySelector(selctor);

const newTodoButton = $(".new-todo-button");

function handleTodoSubmit(e) {
  e.preventDefault();
  const leftInput = $(".left__input");
  const rightInput = $(".right__input");

  if (e.target.classList.contains("left__button")) {
    leftInput.value = "";

    const li = document.createElement("li");
    li.innerHTML(`<span>${leftInput.value}</span><button>"❌"</button>`);
    li.classList.add("left__todo-content");

    $(".left-todos").appendChild(li);
  } else {
    alert("내용을 입력해주세요!");
  }

  if (e.target.classList.contains("right__button")) {
    rightInput.value = "";

    const li = docuemnt.createElement("li");
    li.innerHTML(`<span>${rightInput.value}</span><button>"❌"</button>`);
    li.classList.add("right__todo-content");

    $(".right-todos").appendChild(li);
  } else {
    alert("내용을 입력해주세요!");
  }
}

newTodoButton.addEventListener("click", handleTodoSubmit);

// const leftTodoList = document.querySelector(".todo-list left-todos");
// const rightTodoList = document.querySelector(".todo-list right-todos");

// const todoForm = document.querySelector(".new-todo-form");
// const todoInput = todoForm.querySelector("left__input");
// const TodoButton = todoForm.querySelector(".new-todo-button");

// function handleTodaySubmit(e) {
//   e.preventDefault();
//   const newTodo = todoInput.value;
//   todoInput.value = "";
//   const li = document.createElement("li");
//   const span = document.createElement("span");
//   span.innerText = newTodo;

//   const button = document.createElement("button");
//   button.innerText = "❌";
//   // button.addEventListener("click", deleteTodo);

//   li.appendChild(span);
//   li.appendChild(button);
//   leftTodoList.appendChild(li);
// }

// TodoButton.addEventListener("click", handleTodaySubmit);
