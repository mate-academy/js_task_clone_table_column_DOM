'use strict';

function cloneColumn(section) {
  for (let i = 0; i < section.rows.length; i++) {
    const row = section.rows[i];
    const secondCell = row.cells[1];
    const lastCell = row.cells[row.cells.length - 1];

    if (secondCell && lastCell) {
      const clonedCell = secondCell.cloneNode(true);

      row.insertBefore(clonedCell, lastCell);
    }
  }
}

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const tfoot = document.querySelector('tfoot');

cloneColumn(thead);
cloneColumn(tbody);
cloneColumn(tfoot);
