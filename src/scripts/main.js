'use strict';

// write your code
const tableRows = document.querySelector('table').rows;

for (const row of tableRows) {
  row.cells[row.cells.length - 1].after(row.cells[1].cloneNode(true));
}
