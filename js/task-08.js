const formEl = document.querySelector(".login-form");
const inputAll = document.querySelectorAll("input");

const emailEl = inputAll[0];
const passwordEl = inputAll[1];

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