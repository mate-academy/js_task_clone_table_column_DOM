'use strict';

const table = document.querySelector('table');
const rows = table.querySelectorAll('tr');

rows.forEach((row) => {
  const secondColumnCell = row.cells[1];
  const newCell = secondColumnCell.cloneNode(true);

  row.insertBefore(newCell, row.cells[row.cells.length - 1]);
});
