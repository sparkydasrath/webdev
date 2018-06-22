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

// magazine subclass
class Magazine extends Book {
    constructor(title, author, year, month) {
        super(title, month, year);
        this.month = month;
    }
}

const mag1 = new Magazine("mag 1", "author 1", "2012", "Feb");
console.log(mag1);