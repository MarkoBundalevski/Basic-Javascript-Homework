$.ajax({
    url: "https://jsonplaceholder.typicode.com/todos",
    success: function(result){
        for (let item of result){
            console.log(`id: ${item.id}, title: ${item.title}`);
        }
        alert("Completed");
    },
    error: function(){
        alert("Not Completed");
    }
});