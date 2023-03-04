'use strict';

const rows = document.querySelectorAll('tr');

for (let i = 0; i < rows.length; i++) {
  const clonedCell = rows[i].cells[1].cloneNode(true);
  const currentCell = rows[i].cells[rows[i].cells.length - 1];

  rows[i].insertBefore(clonedCell, currentCell);
}
