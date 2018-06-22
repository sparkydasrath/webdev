function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

Book.prototype.getSummary = function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
}


// magazine constructor
function Magazine(title, author, year, month) {
    Book.call(this, title, author, year);
    this.month = month;
}

// inherit prototype
Magazine.prototype = Object.create(Book.prototype);

// create mag object    
const m1 = new Magazine("mag 1", "m auth", "2010", "jan");