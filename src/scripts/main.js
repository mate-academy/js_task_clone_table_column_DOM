'use strict';

function createCopy(table, columnIndex, copyTo) {
  [...table.rows].forEach((row) => {
    row.insertBefore(row.cells[columnIndex].cloneNode(true), row.cells[copyTo]);
  });
}

createCopy(document.querySelector('table'), 1, 4);
