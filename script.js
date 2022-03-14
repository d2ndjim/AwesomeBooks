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

function showBook(title, author, id) {
  booksWrapper.innerHTML += `
  <div>
    <p>${title}</p>
    <p>${author}</p>
    <button type='button' class="removeBtn${id}">Remove</button>
  </div>
  `
  const removeButton = document.querySelectorAll('.remove-btn');
  removeButton.forEach((elem) => {
    elem.addEventListener('click', () => {
      booksList = booksList.filter(book => book.id !== elem.id);
      booksWrapper.innerHTML = '';
      booksList.forEach((_book) => {
        showBook(bookTitle.value, bookAuthor.value);
      });
    });
  });

}


function addBooks() {
  addBk.addEventListener('click', () => {
    booksList.push(new Book(bookTitle.value, bookAuthor.value, id = Date.now()))
    showBook(bookTitle.value, bookAuthor.value)
    bookTitle.value = '';
    bookAuthor.value = '';
  });
};

addBooks()

function removeBtn (){
  
 removeBtn.addEventListener('click', removeBtn);
}