'use strict';

const table = document.querySelector('table');
const allRows = table.rows;

[...allRows].forEach((row) => {
  const cellToMove = row.cells[1].cloneNode(true);

  row.lastElementChild.before(cellToMove);
});
