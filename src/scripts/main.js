'use strict';

// write your code here
function cloneRow() {
  const mainTable = document.querySelector('table');
  const tHead = mainTable.querySelector('thead');
  const tBody = mainTable.querySelector('tbody');
  const tFoot = mainTable.querySelector('tFoot');

  if (tHead) {
    tHead.querySelectorAll('tr').forEach((row) => {
      const cells = row.querySelectorAll('th, td');
      const secondCell = cells[1];
      const lastCell = cells[cells.length - 1];

      if (row.cells.length < 2) {
        return;
      }

      const clonedCell = secondCell.cloneNode(true);

      row.insertBefore(clonedCell, lastCell);
    });
  }

  if (tBody) {
    tBody.querySelectorAll('tr').forEach((row) => {
      const cells = row.querySelectorAll('th, td');
      const secondCell = cells[1];
      const lastCell = cells[cells.length - 1];

      if (row.cells.length < 2) {
        return;
      }

      const clonedCell = secondCell.cloneNode(true);

      row.insertBefore(clonedCell, lastCell);
    });
  }

  if (tFoot) {
    tFoot.querySelectorAll('tr').forEach((row) => {
      const cells = row.querySelectorAll('th, td');
      const secondCell = cells[1];
      const lastCell = cells[cells.length - 1];

      if (row.cells.length < 2) {
        return;
      }

      const clonedCell = secondCell.cloneNode(true);

      row.insertBefore(clonedCell, lastCell);
    });
  }
}

cloneRow();
