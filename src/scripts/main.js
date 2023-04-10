'use strict';

const table = document.querySelector('table');
const rows = table.rows;
const arrOfData = [];

[...rows].forEach(row => {
  arrOfData.push(row.cells[1].innerHTML);
});

[...rows].forEach((row, i) => {
  let cell;

  if (i === 0 || i === arrOfData.length - 1) {
    cell = document.createElement('th');
    cell.textContent = arrOfData[i];
    row.insertBefore(cell, row.cells[5]);
  } else {
    cell = row.insertCell(5);
    cell.textContent = arrOfData[i];
  }
});
