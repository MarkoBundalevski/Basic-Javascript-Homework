function validateNumber(num){
    return parseInt(num);
}
function sumArray(numArray){
    let total = 0;
    for(num of numArray){
        let val=validateNumber(num);
        if(isNaN(val)){
            alert("Not a number!");
            return;
        }
        total += val;
    }
    return total;
}
console.log(sumArray(['1', '-2', '10', 4, 5]));
console.log(sumArray(['1', '-3', 'a', 2, 6]));