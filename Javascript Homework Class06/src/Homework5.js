let numOfColumns = parseInt(prompt("Enter the number of columns:"));
let numOfRows = parseInt(prompt("Enter the number of rows:"));
function table(columns, rows){
    let createTable = document.createElement("table");
    createTable.setAttribute('border','1px solid black');
    for(let row = 1; row <= rows; row++){
        let tr = createTable.insertRow();
        for(let column = 1; column <= columns; column++){
            let td = tr.insertCell();
            td.innerHTML =`Row - ${row} Column - ${column}`;
        }
    }
    document.getElementById("tableContainer").appendChild(createTable);
}
table(numOfColumns,numOfRows);