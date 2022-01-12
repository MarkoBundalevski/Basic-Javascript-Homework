let myParagraphs = document.getElementsByTagName("p");
let myHeadersH1 = document.getElementsByTagName("h1");
let myHeadersH3 = document.getElementsByTagName("h3");

for(paragraph of myParagraphs){
    paragraph.innerHTML = "This is a changed paragraph text.";
}
for(header of myHeadersH1){
    header.innerHTML = "This is a changed h1 text";
}
for(header of myHeadersH3){
    header.innerHTML = "This is a changed h3 text";
}