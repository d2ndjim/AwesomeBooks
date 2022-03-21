const navigate = () => {
  const booksList = document.querySelector('.books-container');
  const addNewBook = document.querySelector('.add-books');
  const contactPage = document.querySelector('.contact-section');
  const List = document.querySelector("#list");
  const addNew = document.querySelector('#add-new');
  const contact = document.querySelector("#contact-section");
  List.addEventListener('click', () => {
    booksList.classList.remove("hide");
    addNewBook.classList.add("hide");
    contactPage.classList.add("hide");
  });

  addNew.addEventListener('click', () => {
    booksList.classList.add("hide");
    addNewBook.classList.remove("hide");
    contactPage.classList.add("hide");
  });

  contact.addEventListener('click', () => {
    booksList.classList.add("hide");
    addNewBook.classList.add("hide");
    contactPage.classList.remove("hide");
  });
}

export default navigate


// const navItems = Array.from(document.querySelectorAll(".navItems")[0].children);
// const header = document.querySelector(".books-heading");
// const newBook = document.querySelector(".add-books");
// const contact = document.querySelector(".contact-section");

// function navigate(key) {
//   switch (key) {
//     case "list":
//       booksWrapper.classList.remove("hide");
//       header.classList.remove("hide");
//       newBook.classList.add("hide");
//       contact.classList.add("hide");
//       break;
//     case "add-books":
//       booksWrapper.classList.add("hide");
//       header.classList.add("hide");
//       newBook.classList.remove("hide");
//       contact.classList.add("hide");
//       break;
//     case "contact-section":
//       booksWrapper.classList.add("hide");
//       header.classList.add("hide");
//       newBook.classList.add("hide");
//       contact.classList.remove("hide");
//       break;
//     default:
//       break;
//   }
// }
// navItems.forEach((item) => {
//   item.addEventListener("click", (e) => {
//     navigate(e.target.parentElement.id);
//   });
// });