const booksList = []

function addNewBook(obj) {
   booksList.push(obj)
};

function removeBook(obj) {
  booksList = booksList.filter((element) => element.id !== obj.id)
  
}


function Book(book_name, book_author, id) {
  this.title = book_name,
  this.author = book_author, 
  this.id = id
};

function showBook() {
  
}

function addBooks() {
  const title = document.querySelector('#bookName').value;
  const author = document.querySelector('#bookAuthor').value;
  const id = Date.now;
  const obj = new Book(title, author, id);
  booksList.addNewBook(obj)
}

