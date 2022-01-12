function findNumber(number, array){
    let occurences = 0;
    for(val of array){
        if(val == number){
            occurences++;
        }
    }
    alert(`There are ${occurences} occurences of number ${number} in the array.`);
}
findNumber(16, [1, 5, 143, 14, 16, 16, 2, 5, 16, 7]);
findNumber(1, [0, 5, 143, 14, 16, 16, 2, 5, 16, 7]);
findNumber(3, [0, 5, 143, 14, 6, '3', 2, 5, 16, 7]);