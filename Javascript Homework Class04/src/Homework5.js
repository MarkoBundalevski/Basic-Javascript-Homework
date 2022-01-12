let arr = ['a', 'a', 'o', 'tome', 'abc'];
function sumMaxMin(numArray){
    let min = parseInt(arr[0]);
    let max = parseInt(arr[0]);
    for(num of numArray){
        if(!isNaN(num)){
            let val=parseInt(num);
            if(isNaN(min) || val < min){
                min = val;
            }
            if(isNaN(max) || val > max){
                max = val;
            }
        }
    }
    if(isNaN(min) || isNaN(max)){
        return;
    }
    return min + max;
}
console.log(sumMaxMin(arr));