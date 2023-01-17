'use strict';

const table = document.querySelector('table');

const list = table.rows;

[...list].forEach(person => {
  const position = person.cells[1].innerText;

  const td = document.createElement(person.firstElementChild.tagName);

  td.textContent = position;

  person.insertBefore(td, person.lastElementChild);
});
