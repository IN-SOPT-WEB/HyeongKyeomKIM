const todayButton = document.querySelector(".today-button");
const tomorrowButton = document.querySelector(".tomorrow-button");
const allButton = document.querySelector(".all-button");

todayButton.addEventListener("click", clickToday);
tomorrowButton.addEventListener("click", clickTomorrow);
allButton.addEventListener("click", clickAll);

function clickToday() {
  console.log("오늘!");
}

function clickTomorrow() {
  console.log("내일!");
}

function clickAll() {
  console.log("전부!");
}
