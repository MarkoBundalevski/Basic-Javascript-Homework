let book = {
    getStatus:function(){
        let status = this.readingStatus == 1 || this.readingStatus.toLowerCase() === "yes";
        if(status == true){
            return `Already read '${this.title}' by ${this.author}.`;
        }
        else{
            return `You still need to read '${this.title}' by ${this.author}.`;
        }
    }
};
book.title = prompt("What's the title of the book?");
book.author = prompt("What's the name of the author?");
book.readingStatus = prompt("Have you read this book?");
console.log(book);
console.log(book.getStatus());