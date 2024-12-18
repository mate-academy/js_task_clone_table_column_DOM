'use strict';

const table = document.querySelector('table');
const rows = table.rows;
const cellsLength = table.rows[0].cells.length;

[...rows].forEach((row) => {
  const secondRowCopy = row.cells[1].cloneNode(true);

  row.cells[cellsLength - 1].before(secondRowCopy);
});
