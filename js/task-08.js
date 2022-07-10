const formEl = document.querySelector(".login-form");
const inputAll = document.querySelectorAll("input");
console.log(inputAll);

const emailEl = inputAll[0];
const passwordEl = inputAll[1];


function handleSubmit(event) {
  event.preventDefault();
  const formData = {
    emailEl: emailEl.value,
    passwordEl: passwordEl.value,
  };

  console.log(formData);
  formEl.reset();
};

formEl.addEventListener("submit", handleSubmit);

