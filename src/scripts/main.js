'use strict';

const table = document.querySelector('table');

const list = table.rows;

[...list].forEach(element => {
  const text = element.cells[1].innerText;

  const td = document.createElement(element.firstElementChild.tagName);

  td.textContent = text;

  element.insertBefore(td, element.lastElementChild);
});
