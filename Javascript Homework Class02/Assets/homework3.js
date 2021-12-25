let num1 = parseInt(prompt("Please enter the first number:"));
let num2 = parseInt(prompt("Please enter the second number:"));
let num3 = parseInt(prompt("Please enter the third number:"));
let num4 = parseInt(prompt("Please enter the fourth number:"));
let num5 = parseInt(prompt("Please enter the fifth number:"));

let max = num1; // Go postaviv da go zeme prviot kako maximum (najgolem) broj, 
                //se so cel da mozeme da rabotime i so negativni brojki
if(num2 > max){
    max = num2;
}
if(num3 > max){
    max = num3;
}
if(num4 > max){
    max = num4;
}
if(num5 > max){
    max = num5;
}
console.log(`The maximum number in our example is: ${max}`);