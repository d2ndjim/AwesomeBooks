// const webDate = document.querySelector('#date');
import BooksdataBase from './modules/ShowBook.js';
import Date from './modules/datetime.js';
import navigate from "./modules/singlePageNav.js";


const book = new BooksdataBase();
book.addBooks();
navigate();
Date();


