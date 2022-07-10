const refs = {
  input: document.querySelector("#name-input"),
  span: document.querySelector("#name-output"),
};
refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
  if (refs.input.value !== "") {
  return refs.span.textContent = event.currentTarget.value;
  } else {
    return refs.span.textContent = "Anonymous";
  }
    
};

// const input = document.querySelector('input');
// const span = document.querySelector('#name-output');
// const dataOutput = (event) => {
//     event.currentTarget.value !== '' ? span.textContent = event.currentTarget.value : span.textContent = 'Anonymous'
    // if (event.currentTarget.value !== ‘’) {
    //     return span.textContent = event.currentTarget.value
    // }
    // else {
    //     return span.textContent = ‘Anonymous’
    // }
// }
// input.addEventListener('input', dataOutput)