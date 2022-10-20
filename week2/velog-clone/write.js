const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const tagList = $(".tag-list");
const tag = $(".tag");
const tagInput = $(".tag-input");

// 새로운 태그 생성
function createTag(e) {
  if (e.keyCode == 13) {
    const newTag = document.createElement("li");
    newTag.classList.add("tag");
    newTag.innerText = e.target.value;
    newTag.addEventListener("click", deleteTag);
    tagList.appendChild(newTag);
    e.target.value = "";
  }
}

//태그 제거
function deleteTag(e) {
  tagList.removeChild(e.currentTarget);
}

tagInput.addEventListener("keydown", createTag);
