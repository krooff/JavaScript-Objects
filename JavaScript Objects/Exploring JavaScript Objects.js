// Task 1: Create a Book Constructor Function
// Constructor function for Book
function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}
//Task 2: Implement a Method to Display Book Information
// Adding a method to the Book prototype
Book.prototype.displayInfo = function() {
    return `Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}`;
};
//Task 3: Create an Array to Store Books and Functions to Add and Search Books
// Array to store books
const library = [];

// Function to add a new book to the library
function addBook(book) {
    library.push(book);
}

// Function to search books by title or author
function searchBooks(query) {
    return library.filter(book => 
        book.title.toLowerCase().includes(query.toLowerCase()) || 
        book.author.toLowerCase().includes(query.toLowerCase())
    );
}
//Task 4: Filter and Map Operations
// Filter books with more than 100 pages
function filterLongBooks() {
    return library.filter(book => book.pages > 100);
}

// Map titles and authors with "Title: " and "Author: " prefixes
function mapBooks() {
    return library.map(book => ({
        title: `Title: ${book.title}`,
        author: `Author: ${book.author}`,
        pages: book.pages
    }));
}
