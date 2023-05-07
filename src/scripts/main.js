'use strict';

const table = document.querySelector('table');
const tableRows = table.rows;

const cells = [...tableRows].map(item => item.cells[1]);

for (let i = 0; i < cells.length; i++) {
  (tableRows[i].cells[4]).before(cells[i].cloneNode(true));
}
