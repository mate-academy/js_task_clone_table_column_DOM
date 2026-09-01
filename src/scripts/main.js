'use strict';

const table = document.querySelector('table');
const rows = [...table.rows];

function insertColumn(arr) {
  for (let i = 0; i < arr.length; i++) {
    const cell = document.createElement('td');

    cell.innerHTML = arr[i].cells[1].textContent;

    const lastCellIndex = arr[i].cells.length - 1;

    arr[i].cells[lastCellIndex].before(cell);
  }

  return arr;
}

insertColumn(rows);
