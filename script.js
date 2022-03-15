/* eslint-disable consistent-return */
/* eslint-disable max-classes-per-file */

const bookTitle = document.querySelector('#bookName');
const bookAuthor = document.querySelector('#bookAuthor');
const addBk = document.querySelector('.add-btn');
const booksWrapper = document.querySelector('.books-list');

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.id = Date.now();
  }
}
class BooksdataBase {
  constructor() {
    this.booksList = JSON.parse(localStorage.getItem('bookStorage')) || [];
  }

  addBooks() {
    addBk.addEventListener('click', () => {
      const currentBook = new Book(bookTitle.value, bookAuthor.value);
      this.booksList.push(currentBook);
      this.showBook(bookTitle.value, bookAuthor.value, currentBook.id);
      bookTitle.value = '';
      bookAuthor.value = '';
    });
    localStorage.setItem('bookStorage', JSON.stringify(this.booksList));
    this.localstorage();
  }

  showBook(title, author, id) {
    if (title === '' || author === '') {
      return '';
    }

    booksWrapper.innerHTML += `
    <div class="list-container">
      <p>"${title}" By ${author}</p>  
      <button type='button' class="remove-btn" id="${id}">Remove</button>
    </div>`;

    const removeBtn = document.querySelectorAll('.remove-btn');
    removeBtn.forEach((button) => {
      button.addEventListener('click', () => {
        this.booksList = this.booksList.filter(
          (book) => book.id !== Number(button.id),
        );
        booksWrapper.innerHTML = '';
        this.booksList.forEach((book) => {
          this.showBook(book.title, book.author, book.id);
        });
        localStorage.setItem('bookStorage', JSON.stringify(this.booksList));
      });
    });
    localStorage.setItem('bookStorage', JSON.stringify(this.booksList));
  }

  localstorage() {
    if (localStorage !== null) {
      const store = JSON.parse(localStorage.getItem('bookStorage'));
      store.forEach((book) => {
        this.showBook(book.title, book.author, book.id);
      });
    }
  }
}

const book = new BooksdataBase();
book.addBooks();
