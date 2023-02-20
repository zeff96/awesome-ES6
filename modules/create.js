import { render, createBooks } from './app.js';

const addTitle = document.querySelector('.add-title');
const addAuthor = document.querySelector('.add-author');

const addBooks = () => {
  const title = addTitle.value;
  const author = addAuthor.value;

  createBooks(title, author);
  render();
};

export { addTitle, addAuthor };
export default addBooks;
