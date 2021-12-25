let year = parseInt(prompt("Please enter a year:"));
let chineseZodiac = (year - 4) % 12;
console.log (chineseZodiac);

let yearOfThe;
if(chineseZodiac == 0){
    yearOfThe = "Rat";
}
else if(chineseZodiac == 1){
    yearOfThe = "Ox";
}
else if(chineseZodiac == 2){
    yearOfThe = "Tiger";
}
else if(chineseZodiac == 3){
    yearOfThe = "Rabbit";
}
else if(chineseZodiac == 4){
    yearOfThe = "Dragon";
}
else if(chineseZodiac == 5){
    yearOfThe = "Snake";
}
else if(chineseZodiac == 6){
    yearOfThe = "Horse";
}
else if(chineseZodiac == 7){
    yearOfThe = "Goat";
}
else if(chineseZodiac == 8){
    yearOfThe = "Monkey";
}
else if(chineseZodiac == 9){
    yearOfThe = "Rooster";
}
else if(chineseZodiac == 10){
    yearOfThe = "Dog";
}
else if(chineseZodiac == 11){
    yearOfThe = "Pig";
}
else{
    yearOfThe = "";
}
console.log(`It's the year of the ${yearOfThe}!`);