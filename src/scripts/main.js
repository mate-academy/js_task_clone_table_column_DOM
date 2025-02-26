'use strict';

const table = document.querySelector('table');

table.querySelectorAll('tr').forEach((row) => {
  const indexCopy = 1;
  const cell = row.children;

  if (cell) {
    const copyCell = row.children[indexCopy].cloneNode(true);

    row.insertBefore(copyCell, cell[cell.length - 1]);
  }
});
