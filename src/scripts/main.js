'use strict';

const table = document.querySelector('TABLE');

[...table.rows].forEach(row => {
  const cloneSecondCell = row.cells[1].cloneNode(true);
  const lastCellInRow = row.cells[row.cells.length - 1];

  lastCellInRow.insertAdjacentElement('beforebegin', cloneSecondCell);
});
