const bodyEl = document.body;
const buttonEl = document.querySelector(".change-color");
console.log(buttonEl);
const spanEl = document.querySelector(".color");
console.log(spanEl);

function getRandomHexColor() {
  
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

buttonEl.addEventListener("click", getRandomHexColor);

