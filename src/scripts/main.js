'use strict';

const table = document.querySelector('table');
const rows = table.querySelectorAll('tr');

const secondColumnCells = [];

rows.forEach(row => {
  const cell = row.children[1].cloneNode(true);

  secondColumnCells.push(cell);
});

const lastCellIndex = rows[0].children.length - 1;

secondColumnCells.forEach((cell, index) => {
  rows[index].insertBefore(cell, rows[index].children[lastCellIndex]);
});
