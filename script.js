const bookTitle = document.querySelector("#bookName");
const bookAuthor = document.querySelector("#bookAuthor");
const addBk = document.querySelector(".add-btn");
const booksWrapper = document.querySelector(".books-list");

const booksList = [];

function Book(book_name, book_author, id) {
  this.title = book_name, 
  this.author = book_author, 
  this.id = id;
}

function showBook(title, author) {
  booksWrapper.innerHTML += `
  <div>
    <p>${title}</p>
    <p>${author}</p>
    <button type='button'>Remove</button>
  </div>
  `
}

function addBooks() {
  addBk.addEventListener('click', () => {
    booksList.push(new Book(bookTitle.value, bookAuthor.value))
    showBook(bookTitle.value, bookAuthor.value)
    bookTitle.value = '';
    bookAuthor.value = '';
  });
};

addBooks()