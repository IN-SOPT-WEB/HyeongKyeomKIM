const todayButton = document.querySelector(".today-button");
const tomorrowButton = document.querySelector(".tomorrow-button");
const allButton = document.querySelector(".all-button");
const rightSection = document.querySelector(".right-section");
const leftSection = document.querySelector(".left-section");

const HIDDEN_CLASSNAME = "hidden";

todayButton.addEventListener("click", clickToday);
tomorrowButton.addEventListener("click", clickTomorrow);
allButton.addEventListener("click", clickAll);

function clickToday() {
  console.log("오늘!");
  rightSection.classList.add(HIDDEN_CLASSNAME);
  leftSection.classList.remove(HIDDEN_CLASSNAME);
}

function clickTomorrow() {
  console.log("내일!");
  leftSection.classList.add(HIDDEN_CLASSNAME);
  rightSection.classList.remove(HIDDEN_CLASSNAME);
}

function clickAll() {
  console.log("전부!");
  rightSection.classList.remove(HIDDEN_CLASSNAME);
  leftSection.classList.remove(HIDDEN_CLASSNAME);
}
