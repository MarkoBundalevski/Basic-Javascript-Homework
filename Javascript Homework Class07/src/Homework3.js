let car  = {};
car.model = prompt("What is your car's model?");
car.color = prompt("What kind of color is your car?");
car.year = prompt("What year is your car produced?");
car.fuel = prompt("What kind of fuel does your car use?");
car.fuelConsumption = prompt("Fuel consumed per km?");
car.fuelNeededToPassSomeDistance = function(kilometers){
    let someDistance = this.fuelConsumption * kilometers;
    return someDistance;
};
let km = prompt("Distance in kilometers:");
console.log(car.fuelNeededToPassSomeDistance(km));