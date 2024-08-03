'use strict';

const table = document.querySelector('table');

for (const row of table.rows) {
  const copyCell = document.createElement(row.cells[1].tagName);

  copyCell.innerHTML = row.cells[1].innerHTML;
  row.insertBefore(copyCell, row.cells[row.cells.length - 1]);
}
