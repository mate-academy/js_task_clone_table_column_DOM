'use strict';

const table = document.querySelector('table');
const rows = table.querySelectorAll('tr');

for (let i = 0; i < rows.length; i++) {
  const cells = rows[i].cells;
  const clonedCell = cells[1].cloneNode(true);

  rows[i].insertBefore(clonedCell, cells[cells.length - 1]);
}
