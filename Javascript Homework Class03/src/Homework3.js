function convertHumanDogYears(age,type){
    switch(type){
        case "Dog":
            return age / 7;
        case "Human":
            return age * 7;
        default:
            return age;
    }
}
let age = parseInt(prompt("Your dog's age (in human years):"));
if(isNaN(age)){
    console.log("You haven't specified an age!");
}
else{
    let humanToDogYears = convertHumanDogYears(age,'Human');
    let dogToHumanYears = convertHumanDogYears(humanToDogYears,'Dog');
    console.log(`Your dog's age is ${humanToDogYears} (in dog years)`);
    console.log(`Your dog's age is ${dogToHumanYears} (in human years)`);
}
