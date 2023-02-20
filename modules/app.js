const bookContainer = document.querySelector('.books-container');

let books;

const saveBooks = () => (`${localStorage.setItem('books', JSON.stringify(books))}`);

const savedBooks = JSON.parse(localStorage.getItem('books'));

if (Array.isArray(savedBooks)) books = savedBooks;
else books = [];

export const createBooks = (title, author) => {
  const id = `${new Date().getTime()}`;

  books.push({
    title,
    author,
    id,
  });

  saveBooks();
};

export const removeBooks = (idToDelete) => {
  books = books.filter((book) => book.id !== idToDelete);

  saveBooks();
};

export const render = () => {
  bookContainer.innerHTML = '';

  books.forEach((book) => {
    const child = document.createElement('div');
    child.className = 'child-container d-flex justify-content-between align-items-center';
    child.id = `${book.id}`;

    const bookInfo = document.createElement('div');
    bookInfo.className = 'd-flex';
    const title = document.createElement('p');
    title.textContent = `"${book.title}" by`;
    const author = document.createElement('p');
    author.textContent = `${book.author}`;
    bookInfo.append(title, author);

    const deleteBooks = (todoToDelete) => () => {
      removeBooks(todoToDelete.id);
      render();
    };

    const btnContainer = document.createElement('div');

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'remove';
    deleteButton.classList.add('button');
    deleteButton.id = `${book.id}`;
    deleteButton.onclick = deleteBooks(book);
    btnContainer.appendChild(deleteButton);

    child.append(bookInfo, btnContainer);
    bookContainer.appendChild(child);
  });
};
