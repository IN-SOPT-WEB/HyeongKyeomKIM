const todayButton = document.querySelector(".today-button");
const tomorrowButton = document.querySelector(".tomorrow-button");
const allButton = document.querySelector(".all-button");
const rightSection = document.querySelector(".right__section");
const leftSection = document.querySelector(".left__section");

const HIDDEN_CLASSNAME = "hidden";

function clickToday() {
  rightSection.classList.add(HIDDEN_CLASSNAME);
  leftSection.classList.remove(HIDDEN_CLASSNAME);
}

function clickTomorrow() {
  leftSection.classList.add(HIDDEN_CLASSNAME);
  rightSection.classList.remove(HIDDEN_CLASSNAME);
}

function clickAll() {
  rightSection.classList.remove(HIDDEN_CLASSNAME);
  leftSection.classList.remove(HIDDEN_CLASSNAME);
}

todayButton.addEventListener("click", clickToday);
tomorrowButton.addEventListener("click", clickTomorrow);
allButton.addEventListener("click", clickAll);
