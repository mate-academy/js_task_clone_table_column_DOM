'use strict';

const table = document.querySelector('table');
const rows = [...table.rows];

function insertCloneColumnBefore(arr, clone, Before) {
  for (let i = 0; i < arr.length; i++) {
    const cell = arr[i].cells[clone].cloneNode(true);

    const cloneCell = arr[i].appendChild(cell);

    arr[i].cells[arr[i].cells.length - 2].before(cloneCell);
  }
}

insertCloneColumnBefore(rows, 1, 4);
