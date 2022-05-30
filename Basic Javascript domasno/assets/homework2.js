// Area of a circle
var r = prompt("Enter the value of the radius:");
var area;
var parseR = parseInt(r);
area = Math.PI * Math.pow(parseR, 2);
console.log(area);
console.log(typeof area);