"use strict";
// const ingredients = [
//   'Potatoes',
//   'Mushrooms',
//   'Garlic',
//   'Tomatos',
//   'Herbs',
//   'Condiments',
// ];
// const potatoesEl= document.createElement('li');

// potatoesEl.classList.add('item');
// potatoesEl.textContent = "Potatoes";

// console.log(potatoesEl);

// console.dir(potatoesEl);


const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ulEl = document.querySelector('#ingredients');

const list = ingredients.reduce((str, item) => str + `<li>${item}</li>`, '');

ulEl.innerHTML = list;