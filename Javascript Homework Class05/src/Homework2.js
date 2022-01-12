firstNames = ["Marko", "John", "Jason", "Peter"];
lastNames = ["Bundalevski", "Smith", "Richardson", "Parker"];
function fullNames(first, last){
    let fullName = [];
    for(let i = 0; i < first.length; i++){
        fullName[i] = `${i+1}. ${first[i]} ${last[i]}`;
    }
    return fullName;
}
console.log(fullNames(firstNames,lastNames));