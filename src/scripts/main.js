'use strict';

const tableElemEmployee = document.querySelector('table');
const allRowsEmployee = [...tableElemEmployee.rows];

allRowsEmployee.forEach((row) => {
  const secondCell = row.cells[1];
  const lastCell = row.cells[row.cells.length - 1];

  if (secondCell) {
    const cloneCell = secondCell.cloneNode(true);

    lastCell.before(cloneCell);
  }
});