let myInput = $("<input type='text' placeholder='Enter a greeting message'>");
$("body").append(myInput);
let myButton = $("<button>Greeting</button>");
$("body").append(myButton);
let myHeader = $("<h1></h1>");
$("body").append(myHeader);

myButton.click(function(){
    myHeader.text(`Hello there ${myInput.val()}!`);
});