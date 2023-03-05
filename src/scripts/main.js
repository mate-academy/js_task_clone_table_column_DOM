'use strict';

const table = document.querySelector('table');
const rows = table.rows; 

for (let i = 0; i < rows.length; i++) {
  const secondCell = rows[i].cells[1]; 
  const newCell = document.createElement('td'); 
  newCell.textContent = secondCell.textContent; 
  const lastCell = rows[i].cells[rows[i].cells.length - 1];
  rows[i].insertBefore(newCell, lastCell);
}
