let numArray = [1, 5, 7, 3, 10];
let numberList = document.getElementById("numberList");
let sumArray = document.getElementById("sumArray");
let mathEquation = document.getElementById("math");
let sum = 0;
let math = '';
for(num of numArray){
    let listItem = document.createElement("li");
    listItem.innerHTML = num;
    numberList.appendChild(listItem);
    sum += num;
    math += `${num} + `;
}
math = math.slice(0, -2);
math += `= ${sum}`;
sumArray.innerHTML = sum;
mathEquation.innerHTML = math;