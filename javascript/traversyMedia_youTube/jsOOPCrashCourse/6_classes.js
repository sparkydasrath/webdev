class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }

}


// inst obj 
const book1 = new Book("book one", "auth 1", "2013");
console.log(book1);