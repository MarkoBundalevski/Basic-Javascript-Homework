var phones = 30;
var price = parseFloat(prompt("Enter the phone price:"));
var taxRate = parseFloat(prompt("Enter the tax rate (in percentage):"));
var taxPrice = taxRate / 100; // calculating the tax value in decimals (number, float)
var totalPrice = price * phones; // calculating the total price of the phones
var finalTax = price * taxPrice; // calculating the single phone price with the tax rate
var totalTaxPrice = finalTax * phones; // calculating the total phone price with the tax rate
var Total = totalPrice + totalTaxPrice; // calculating the total price; tax included
console.log(Total);