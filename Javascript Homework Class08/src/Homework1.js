let animals = [];
function updateAnimals(){
    let animalUL = document.getElementById("animalUL");
    animalUL.innerHTML = "";
    for (let animal of animals){
        let li = document.createElement("li");
        li.innerHTML = `name: ${animal.name}, type: ${animal.type}, age: ${animal.age}`;
        animalUL.appendChild(li);
    }
}
function submitForm(e){
    e.preventDefault();
    let nameID = document.getElementById("nameID");
    let typeID = document.getElementById("typeID");
    let ageID = document.getElementById("ageID");

    let Animal = {
        name: nameID.value,
        type: typeID.value,
        age: ageID.value
    };
    animals.push(Animal);
    updateAnimals();
    e.target.reset();
}