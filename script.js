const bookTitle = document.querySelector("#bookName");
const bookAuthor = document.querySelector("#bookAuthor");
const addBk = document.querySelector(".add-btn");
const booksWrapper = document.querySelector(".books-list");

let booksList = JSON.parse(localStorage.getItem("bookStorage")) || [];

class Book {
  constructor(title, author) {
    this.title = title,
    this.author = author,
    this.id = title;
  }
}

//local storage function

function showBook(title, author) {
  booksWrapper.innerHTML += `
  <div>
    <p>${title}</p>  
    <p>${author}</p>
    <button type='button' class="remove-btn" id="${title}">Remove</button>
  </div>`
  ;

  //remove button line 34
}

function addBooks() {
  addBk.addEventListener('click', () => {
    booksList.push(new Book(bookTitle.value, bookAuthor.value))
    showBook(bookTitle.value, bookAuthor.value)
    bookTitle.value = '';
    bookAuthor.value = '';
  });
  localStorage.setItem("bookStorage", JSON.stringify(booksList));
  localstorage();
};

addBooks();
