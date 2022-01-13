let nameOfRecipe = document.getElementById("nameOfRecipe");
let ingredients = document.getElementById("ingredients");
let recipe = prompt("Enter the name of the recipe:");
let numOfIngredients = parseInt(prompt("How many ingredients do you need?"));
let array = [];
for(let i = 1; i <= numOfIngredients; i++){
    let nameOfIngredients = prompt(`What is the name of the #${i} ingredient?`);
    array.push(nameOfIngredients);
}
for(ingredient of array){
    let listItem = document.createElement("li");
    listItem.innerHTML = ingredient;
    ingredients.appendChild(listItem);
}
nameOfRecipe.innerHTML = recipe;