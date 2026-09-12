'use strict';

// write your code
const tableRows = document.querySelector('table').rows;

for (const row of tableRows) {
  row.cells[3].after(row.cells[1].cloneNode(true));
}
