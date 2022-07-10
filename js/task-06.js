const inputEl = document.querySelector('#validation-input');
console.log(inputEl);

const lengthEl = parseInt(inputEl.getAttribute("data-length"));
// console.log(length);

inputEl.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  // console.log(event.currentTarget.value);

  if (inputEl.value.length === lengthEl) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
    
  }
  
};

// const input = document.querySelector('input')
// const validLength = parseInt(input.getAttribute("data-length"))

// input.addEventListener("blur", (event) => {

//     if (event.currentTarget.value.length === validLength) {
//     event.currentTarget.classList.add('valid')
//     event.currentTarget.classList.remove('invalid') 
//     }
//     else {
//     event.currentTarget.classList.add('invalid')
//     event.currentTarget.classList.remove('valid')
//     }
//     })
