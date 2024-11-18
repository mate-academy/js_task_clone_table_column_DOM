'use strict';

const tableElemet = document.querySelector('table');

['thead', 'tbody', 'tfoot'].forEach((section) => {
  const rows = tableElemet.querySelector(section).rows;

  Array.from(rows).forEach((row) => {
    const secondCell = row.cells[1];
    const lastCell = row.cells[row.cells.length - 1];

    if (secondCell && lastCell) {
      const clonedCell = secondCell.cloneNode(true);

      row.insertBefore(clonedCell, lastCell);
    }
  });
});

// write your code here
