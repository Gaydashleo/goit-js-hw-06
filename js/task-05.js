const refs = {
  input: document.querySelector("#name-input"),
  span: document.querySelector("#name-output"),
};
refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
  if (refs.input === "") {
    refs.span.innerHTML = "Anonymous";
  } else {
    refs.span.textContent = event.currentTarget.value;
  }
    
};