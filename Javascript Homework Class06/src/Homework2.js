function weightInChickens(w){
    return w * 0.5;
}
let weight = prompt("Enter weight (in kilograms):");
document.getElementById("resultText").innerHTML = weightInChickens(weight);