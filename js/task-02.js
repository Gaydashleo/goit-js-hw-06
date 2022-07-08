"use strict";
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector(`#ingredients`);
const ingredientEl = (elements) => elements.map(element => {
  const ingredient = document.createElement("li");
  ingredient.classList.add("item");
  ingredient.textContent = element;

  return ingredient;
});
const createdIngredientEl = ingredientEl(ingredients);
list.append(...createdIngredientEl);