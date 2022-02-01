let myInput = $("<input type='text'>");
$("body").append(myInput);
let myColor = $("<input type='text'>");
$("body").append(myColor);
let myButton = $("<button>Generate h1</button>");
$("body").append(myButton);
let myHeader3 = $("<h3></h3>");
$("body").append(myHeader3);
let myHeaders = $("<div></div>");
$("body").append(myHeaders);

myButton.click(function(){
    let text=myInput.val();
    let color=myColor.val();
    let newHeader = $("<h1></h1>").text(text).css('color',color);
    if (text=='' || newHeader.css('color')==''){
        myHeader3.text("Error in creating a header!");
    }
    else{
        myHeader3.text("");
        myHeaders.append(newHeader);
    }
});