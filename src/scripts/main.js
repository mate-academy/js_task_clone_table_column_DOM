'use strict';

const table = document.querySelector('table');
const rows = table.rows;

Array.from(rows).forEach(row => {
  const secondCell = row.cells[1];
const newCell = document.createElement(secondCell.tagName);
newCell.innerHTML = secondCell.innerHTML;


const lastIndex = row.cells.length - 1;
row.insertBefore(newCell, row.cells[lastIndex]);
})
