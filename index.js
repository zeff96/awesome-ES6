import { render } from './modules/app.js';
import addBooks, { addTitle, addAuthor } from './modules/create.js';
import toggleMenu from './modules/menu.js';
import updateTime from './modules/time.js';

const addBtn = document.querySelector('.btn');

setInterval(updateTime, 1000);

toggleMenu();
addBtn.addEventListener('click', (e) => {
  e.preventDefault();

  addBooks();
  addTitle.value = '';
  addAuthor.value = '';
});
window.onload = render();
