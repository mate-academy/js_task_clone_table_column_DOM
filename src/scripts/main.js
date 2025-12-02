'use strict';

const table = document.querySelector('table');
const rows = [...table.rows];

rows.forEach((el) => {
  const newEl = el.children[1].cloneNode(true);

  el.insertBefore(newEl, el.cells[el.cells.length - 1]);
});
