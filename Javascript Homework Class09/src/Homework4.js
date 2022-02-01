let myInput1 = $("<input type='number' value='0'>");
$("body").append(myInput1);
let myInput2 = $("<input type='number' value='0'>");
$("body").append(myInput2);
let myInput3 = $("<input type='number' value='0'>");
$("body").append(myInput3);
let myHeader = $("<h1></h1>");
$("body").append(myHeader);

function average(){
    let avg = (parseFloat(myInput1.val()) + parseFloat(myInput2.val()) + parseFloat(myInput3.val())) / 3;
    myHeader.css('color', avg >= 10 ? 'green' : 'red');
    myHeader.text(avg);
}

myInput1.on('input',average);
myInput2.on('input',average);
myInput3.on('input',average);