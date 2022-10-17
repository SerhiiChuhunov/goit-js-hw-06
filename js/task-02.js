const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const makeIngredientsList = product =>
  product.map(item => {
    const ingredientItem = document.createElement('li');
    ingredientItem.textContent = item;
    ingredientItem.classList.add('item');
    return ingredientItem;
  }
  );

const ingredientsList = document.getElementById('ingredients');
const productElements = makeIngredientsList(ingredients);
ingredientsList.append(...productElements);