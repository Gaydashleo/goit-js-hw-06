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
// const getInfo = (event) => {
//     event.preventDefault();
//     const emailRef = event.target.email.value
   
//     const passwordRef = event.target.password.value
   
//     const infoBox = {
//         emailRef,
//         passwordRef,
//     };
//     if (emailRef === '' || passwordRef === '') {
//         alert('Додайте дані в порожні поля: email/password');
//     } 
//     console.log(infoBox);
//     form.reset();
//     return;
// };
    
// form.addEventListener('submit', getInfo);