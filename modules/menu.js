const lists = document.querySelectorAll('.list-item');
const links = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');

const toggleMenu = () => {
  lists.forEach((list) => {
    list.addEventListener('click', (e) => {
      e.preventDefault();

      const { id } = e.target.dataset;

      if (id) {
        links.forEach((link) => {
          link.classList.remove('live');
        });
        e.target.classList.add('live');

        sections.forEach((sec) => {
          sec.classList.remove('d-flex-column');
        });

        const elems = document.getElementById(id);
        elems.classList.add('d-flex-column');
      }
    });
  });
};

export default toggleMenu;
