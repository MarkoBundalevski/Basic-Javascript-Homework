let animal = {
    speak:function(msg){
        console.log(`${this.kind} says: ${msg}`);
    }
};
animal.name = prompt("What's your animal's name?");
animal.kind = prompt("What kind of animal do you have?");
animal.speak("Hey bro!");
console.log(animal);