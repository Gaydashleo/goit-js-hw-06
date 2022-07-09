const button = {
  addition: document.querySelector("[data-action = 'increment']"),
  subtract: document.querySelector("[data-action = 'decrement']"),
  span: document.querySelector("#value"),
  };
let counterValue = 0;
const increment = () => {
  counterValue += 1;
  button.span.textContent = counterValue;
};
const decrement = () => {
  counterValue -= 1;
  button.span.textContent = counterValue;
};
button.addition.addEventListener("click", increment);
button.subtract.addEventListener("click", decrement);