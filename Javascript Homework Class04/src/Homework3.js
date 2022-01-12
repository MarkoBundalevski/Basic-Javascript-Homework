function randomArray(ranArray){
    let str = '';
    let length = ranArray.length - 1;
    for(let i = 0; i < length; ++i){
        str += ranArray[i] + ' ';
    }
    str = str.trimEnd();
    str += ranArray[length];
    return str;
}
console.log(randomArray(["Hello", "there", "students", "of", "SEDC", "!"]));
console.log(randomArray(["Hello", "!"]));