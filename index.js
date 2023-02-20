import { render } from './modules/app.js';
import addBooks, { addTitle, addAuthor } from './modules/create.js';
import toggleMenu from './modules/menu.js';
import { DateTime } from './node_modules/luxon/src/luxon.js';

const addBtn = document.querySelector('.btn');
const dateContainer = document.querySelector('.date-container');
const alertBox = document.querySelector('.alert');

const addZero = (num) => ((num < 10) ? `0${num}` : num);

const updateTime = () => {
  const date = DateTime.local().toLocaleString(DateTime.DATE_MED);
  const { hour } = DateTime.local().c;
  const min = DateTime.local().c.minute;
  const sec = addZero(DateTime.local().c.second);

  dateContainer.innerHTML = `${date} ${hour}:${min}:${sec}`;
};

setInterval(updateTime, 1000);

toggleMenu();
addBtn.addEventListener('click', (e) => {
  e.preventDefault();

  addBooks();
  const showAlert = () => {
    alertBox.classList.add('active');
  };
  showAlert();

  const removeAlert = () => {
    alertBox.classList.remove('active');
  };

  setTimeout(removeAlert, 2000);

  addTitle.value = '';
  addAuthor.value = '';
});
window.onload = render();
