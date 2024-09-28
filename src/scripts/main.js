'use strict';

// write your code here

const table = document.querySelector('table');
const secondColumnIndex = 1;
const lastColumnIndex = table.rows[0].cells.length - 1;

const cloneCells = [];

for (let i = 0; i < table.rows.length; i++) {
  const cell = table.rows[i].cells[secondColumnIndex].cloneNode(true);
  cloneCells.push(cell);
}

for (let i = 0; i < table.rows.length; i++) {
  const newCell = table.rows[i].insertCell(lastColumnIndex);
  newCell.appendChild(cloneCells[i]);
}
