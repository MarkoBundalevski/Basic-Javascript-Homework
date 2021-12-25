let year = parseInt(prompt("Please enter a year:"));
let chineseZodiac = (year - 4) % 12;
console.log (chineseZodiac);

let yearOfThe;
switch(chineseZodiac){
    case 0:
        yearOfThe = "Rat";
        break;
    case 1:
        yearOfThe = "Ox";
        break;
    case 2:
        yearOfThe = "Tiger";
        break;
    case 3:
        yearOfThe = "Rabbit";
        break;
    case 4:
        yearOfThe = "Dragon";
        break;
    case 5:
        yearOfThe = "Snake";
        break;
    case 6:
        yearOfThe = "Horse";
        break;
    case 7:
        yearOfThe = "Goat";
        break;
    case 8:
        yearOfThe = "Monkey";
        break;
    case 9:
        yearOfThe = "Rooster";
        break;
    case 10:
        yearOfThe = "Dog";
        break;
    case 11:
        yearOfThe = "Pig";
        break;
    default:
        yearOfThe = "";
        break;
}
console.log(`It's the year of the ${yearOfThe}!`);