'use strict';

const table = document.querySelector('table');
const rows = [...table.rows];

function insertCloneColumnBefore(arr, clone, Before) {
  for (let i = 0; i < arr.length; i++) {
    const cell = arr[i].cells[clone].cloneNode(true);

    arr[i].cells[Before].before(cell);
  }

  return arr;
}

insertCloneColumnBefore(rows, 1, 4);
