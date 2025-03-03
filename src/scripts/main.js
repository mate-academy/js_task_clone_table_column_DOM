'use strict';

const table = document.querySelector('table');

const rows = Array.from(table.rows);

rows.forEach((row) => {
  const secondCell = row.cells[1];
  const lastColumn = row.cells.length - 1;
  const newCell = row.insertCell(lastColumn);

  newCell.innerHTML = secondCell.innerHTML;
});
