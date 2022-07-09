const refs = {
  input: document.querySelector("#name-input"),
  span: document.querySelector("#name-output"),
};
refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
  console.log(event.currentTurget.value);
  refs.span.textContent = event.currentTurget.value;
};