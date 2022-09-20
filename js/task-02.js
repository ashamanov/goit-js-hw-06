const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

let list = document.querySelector("#ingredients");
let array = []
const food = ingredients.forEach(ingredient => {
  let items = document.createElement("li");
  items.textContent = ingredient;
  items.classList.add("item")
  array.push(items)
});
list.append(...array);