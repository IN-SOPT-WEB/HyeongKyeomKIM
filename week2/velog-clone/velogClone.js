$ = (selector) => document.querySelector(selector);
$$ = (selector) => document.querySelectorAll(selector);

const HIDDEN_CLASSNAME = "hidden";
const dropDownButton = $(".nav__dropdown");

// 드롭다운 메뉴 띄우기
function openDropDown() {
  const dropDownList = $(".dropdown-list");
  dropDownList.classList.toggle(HIDDEN_CLASSNAME);
}

// 게시글 모달참 구현
const articleCard = $$(".article__card");

function openModal(e) {
  e.preventDefault();

  alert("모달 열려라!");
}
dropDownButton.addEventListener("click", openDropDown);
articleCard.forEach((item) => item.addEventListener("click", openModal));
