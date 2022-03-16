/* eslint-disable consistent-return */
/* eslint-disable max-classes-per-file */

const bookTitle = document.querySelector('#bookName');
const bookAuthor = document.querySelector('#bookAuthor');
const addBk = document.querySelector('.add-btn');
const booksWrapper = document.querySelector('.books-list');

const navItems = Array.from(document.querySelectorAll(".navItems")[0].children,);
const header = document.querySelector(".books-heading");
const newBook = document.querySelector('.add-books');
const contact = document.querySelector('.contact-section');
const webDate = document.querySelector('#date');

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

function navigate(key) {
  switch (key) {
    case "list":
      booksWrapper.classList.remove("hide");
      header.classList.remove("hide");
      newBook.classList.add("hide");
      contact.classList.add("hide");
      break;
    case "add-books":
      booksWrapper.classList.add("hide");
      header.classList.add("hide");
      newBook.classList.remove("hide");
      contact.classList.add("hide");
      break;
    case "contact-section":
      booksWrapper.classList.add("hide");
      header.classList.add("hide");
      newBook.classList.add("hide");
      contact.classList.remove("hide");
      break;
    default:
      break;
  }
}

navItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    navigate(e.target.parentElement.id);
  });
});




function time() {
  const date = new Date();
  const locale = navigator.language;
  const options = {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: "false",
  };

  webDate.textContent = `${date.toLocaleTimeString(locale, options)}`;
}

setInterval(time, 1000);
