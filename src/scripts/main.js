'use strict';

const rows = document.querySelectorAll('tr');

rows.forEach((row) => {
  if (row.cells.length > 1) {
    const secondCellClone = row.cells[1].cloneNode(true);

    row.insertBefore(secondCellClone, row.cells[row.cells.length - 1]);
  }
});
