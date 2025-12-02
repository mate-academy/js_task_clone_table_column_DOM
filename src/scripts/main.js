'use strict';

const table = document.querySelector('table');
const rows = [...table.rows];

rows.forEach((el) => {
  const newEl = document.createElement(el.children[1].nodeName);

  newEl.innerHTML = el.children[1].textContent;
  el.insertBefore(newEl, el.cells[el.cells.length - 1]);
});
