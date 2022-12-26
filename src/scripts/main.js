'use strict';

const table = document.querySelector('table');

[...table.rows].forEach(el => {
  const cellForCloning = el.cells[1];
  const lastCell = el.lastElementChild;

  lastCell.before(cellForCloning.cloneNode(true));
});
