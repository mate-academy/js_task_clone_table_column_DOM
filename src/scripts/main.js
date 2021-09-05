'use strict';

const table = document.querySelector('table');

for (const rowCount of table.rows) {
  for (const cell of rowCount.children) {
    if (cell.cellIndex === 1) {
      const copyCell = cell.cloneNode(true);

      rowCount.children[3].after(copyCell);
    }
  }
}
