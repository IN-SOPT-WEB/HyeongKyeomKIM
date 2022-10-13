const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const tagList = $(".tag-list");
const tag = $(".tag");
const TagInput = $(".tag-input");

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

function deleteTag(e) {
  tagList.removeChild(e.currentTarget);
}

TagInput.addEventListener("keydown", createTag);
