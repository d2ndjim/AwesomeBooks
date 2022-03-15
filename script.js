/* eslint-disable consistent-return */
const bookTitle = document.querySelector('#bookName');
const bookAuthor = document.querySelector('#bookAuthor');
const addBk = document.querySelector('.add-btn');
const booksWrapper = document.querySelector('.books-list');

let booksList = JSON.parse(localStorage.getItem('bookStorage')) || [];

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.id = Date.now();
  }
}

function showBook(title, author, id) {
  if (title === '' || title === '') {
    return '';
  }

  booksWrapper.innerHTML += `
  <div>
    <p>${title}</p>  
    <p>${author}</p>
    <button type='button' class="remove-btn" id="${id}">Remove</button>
  </div>`;
  const removeBtn = document.querySelectorAll('.remove-btn');
  removeBtn.forEach((button) => {
    button.addEventListener('click', () => {
      booksList = booksList.filter((book) => book.id !== Number(button.id));
      booksWrapper.innerHTML = '';
      booksList.forEach((book) => {
        showBook(book.title, book.author, book.id);
      });
      localStorage.setItem('bookStorage', JSON.stringify(booksList));
    });
  });
  localStorage.setItem('bookStorage', JSON.stringify(booksList));
}

function localstorage() {
  if (localStorage !== null) {
    const store = JSON.parse(localStorage.getItem('bookStorage'));
    store.forEach((book) => {
      showBook(book.title, book.author, book.id);
    });
  }
}

function addBooks() {
  addBk.addEventListener('click', () => {
    const currentBook = new Book(bookTitle.value, bookAuthor.value);
    booksList.push(currentBook);
    showBook(bookTitle.value, bookAuthor.value, currentBook.id);
    bookTitle.value = '';
    bookAuthor.value = '';
  });
  localStorage.setItem('bookStorage', JSON.stringify(booksList));
  localstorage();
}

addBooks();
