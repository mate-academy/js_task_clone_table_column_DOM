'use strict';

const table = document.querySelector('table');

for (const row of table.rows) {
  const positionCopy = document.createElement(row.cells[1].tagName);

  positionCopy.innerHTML = row.cells[1].innerHTML;
  row.insertBefore(positionCopy, row.cells[row.cells.length - 1]);
}
