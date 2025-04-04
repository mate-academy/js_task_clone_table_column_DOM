'use strict';

const table = document.querySelector('table');

[...table.rows].forEach((row) => {
  const cell = row.cells[1];
  const newCell = document.createElement(cell.tagName);

  newCell.innerText = cell.innerText;
  row.lastElementChild.before(newCell);
});
