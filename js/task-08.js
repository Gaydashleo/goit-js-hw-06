const formEl = document.querySelector(".login-form");
const inputAll = document.querySelectorAll("input");

const emailEl = formEl.elements[0];
const passwordEl = formEl.elements[1];

  const handleSubmit = (event) => {
  event.preventDefault();
  const formData = {
    emailEl: emailEl.value,
    passwordEl: passwordEl.value,
  };
    if (emailEl.value === "" || passwordEl.value === "" ) {
      alert(" Будь ласка, заповніть порожні поля ");
    }

  console.log(formData);
  formEl.reset();
};

formEl.addEventListener("submit", handleSubmit);


// function handleSubmit(event) {
//   event.preventDefault();
//   const formData = {
//     emailEl: emailEl.value,
//     passwordEl: passwordEl.value,
//   };

//   console.log(formData);
//   formEl.reset();
// };

// formEl.addEventListener("submit", handleSubmit);

// const form = document.querySelector('.login-form');
// const email = form.elements[0];
// const password = form.elements[1];
// console.log(form.elements)
// console.log(email)
// console.log(password)