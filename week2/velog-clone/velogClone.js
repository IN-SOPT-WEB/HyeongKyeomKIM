$ = (selector) => document.querySelector(selector);
$$ = (selector) => document.querySelectorAll(selector);

const HIDDEN_CLASSNAME = "hidden";
const SELECTED_CLASSNAME = "selected";

const dropDownButton = $(".nav__dropdown");
const writeButton = $(".header__write-button");
const dropDownList = $(".dropdown-list");
const dropDownOptionAll = $$(".list");
const articleCard = $$(".article__card");

// write 페이지로 이동
function moveWritePage() {
  location.href = "write.html";
}

// 드롭다운 메뉴 띄우기
function openDropDown() {
  dropDownList.classList.toggle(HIDDEN_CLASSNAME);
}

// 드롭다운 옵션 선택 이벤트
function handleDropDownOption(e) {
  let previousOption = $(".selected");
  const selectedOption = e.currentTarget;

  dropDownButton.textContent = selectedOption.textContent;
  previousOption.classList.remove(SELECTED_CLASSNAME);
  selectedOption.classList.add(SELECTED_CLASSNAME);
  previousOption = selectedOption;
}

// 게시글 모달참 구현
function openModal() {
  alert("모달 열려라!");
}

dropDownButton.addEventListener("click", openDropDown);
articleCard.forEach((item) => item.addEventListener("click", openModal));
writeButton.addEventListener("click", moveWritePage);
dropDownOptionAll.forEach((option) =>
  option.addEventListener("click", handleDropDownOption)
);
