fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json())
    .then(data => {
        for(let item of data){
            console.log(`id: ${item.id}, title: ${item.title}`);
        }
        alert("Completed");
    })
    .catch(err => {
        alert("Not Completed");
    });
