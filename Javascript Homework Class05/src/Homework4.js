function findNumber(array, type){
    let numberArray = [];
    for(val of array){
        if(type === "even" && val % 2 == 0){
            numberArray.push(val);
        }
        else if(type === "odd" && val % 2 != 0){
            numberArray.push(val);
        }
    }
    return numberArray;
}
console.log(findNumber([3, 5, 2, 6, 7, 2, 8, 10, 12, 55, 13, 19], "even"));
console.log(findNumber([3, 5, 2, 6, 7, 2, 8, 10, 12, 55, 13, 19], "odd"));