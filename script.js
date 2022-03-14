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

function showBook(obj) {
  const name = obj.bookTitle;
  const author = obj.bookAuthor;
  const booksWrapper = document.querySelector('.books-list');
  const container = document.createElement('li');
  const bookInfo = document.createElement('div');
  const bookName = document.createElement('p');
  const bookAuthor = document.createElement('p')
  const removeBtn = document.createElement('button')
  removeBtn.innerText = 'Remove'
  bookName.innerText = `${name}`;
  bookAuthor.innerText = `${author}`;
  bookInfo.appendChild(bookName)
  bookInfo.appendChild(author)
  bookInfo.appendChild(removeBtn)
  container.appendChild(bookInfo)
  booksWrapper.appendChild(container)

  removeBtn.addEventListener('click', removeBook)
}

function addBooks() {
  const title = document.querySelector('#bookName').value;
  const author = document.querySelector('#bookAuthor').value;
  const id = Date.now;
  const obj = new Book(title, author, id);
  booksList.addNewBook(obj);
  showBook(obj);
}

const addButton = document.querySelector('.add-btn');

addButton.addEventListener('click', addBooks);
