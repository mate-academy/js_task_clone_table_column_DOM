'use strict';

// write your code here
const tablet = document.querySelector('table');

const clone = (tablet, columnIndex) => {
  const rows = tablet.rows;

  for (let row of rows) {
    const cells = row.cells;

    if (cells.length > columnIndex) {
      const clonedCell = cells[columnIndex].cloneNode(true);
      row.insertBefore(clonedCell, cells[cells.length - 1]);
    }
  }
}

clone(tablet, 1);

