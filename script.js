const bookTitle = document.querySelector('#bookName');
const bookAuthor = document.querySelector('#bookAuthor');
const addBk = document.querySelector('.add-btn');
const booksWrapper = document.querySelector('.books-list');

let booksList = JSON.parse(localStorage.getItem('bookStorage')) || [];

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.id = title;
  }
}

function showBook(title, author) {
  booksWrapper.innerHTML += `
  <div>
    <p>${title}</p>  
    <p>${author}</p>
    <button type='button' class="remove-btn" id="${title}">Remove</button>
  </div>`;
  const removeBtn = document.querySelectorAll('.remove-btn');
  removeBtn.forEach((button) => {
    button.addEventListener('click', () => {
      booksList = booksList.filter((book) => book.id !== button.id);
      booksWrapper.innerHTML = '';
      booksList.forEach((book) => {
        showBook(book.title, book.author);
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
      showBook(book.title, book.author);
    });
  }
}

function addBooks() {
  addBk.addEventListener('click', () => {
    booksList.push(new Book(bookTitle.value, bookAuthor.value));
    showBook(bookTitle.value, bookAuthor.value);
    bookTitle.value = '';
    bookAuthor.value = '';
  });
  localStorage.setItem('bookStorage', JSON.stringify(booksList));
  localstorage();
}

addBooks();
