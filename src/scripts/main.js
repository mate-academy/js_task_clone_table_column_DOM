'use strict';

function cloneColumn(indexToClone) {
  const rows = document.querySelectorAll('table tr');

  rows.forEach((row) => {
    const targetCell = row.cells[indexToClone];

    if (targetCell) {
      const newCell = document.createElement(targetCell.tagName);

      newCell.textContent = targetCell.textContent;

      const lastCell = row.lastElementChild;

      row.insertBefore(newCell, lastCell);
    }
  });
}

cloneColumn(1);
