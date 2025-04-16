'use strict';

const table = document.querySelector('table');
const sections = ['thead', 'tbody', 'tfoot'];

sections.forEach((section) => {
  const rows = table.querySelector(section).rows;

  for (const row of rows) {
    const cellToClone = row.cells[1];
    const clonedCell = cellToClone.cloneNode(true);

    row.insertBefore(clonedCell, row.cells[row.cells.length - 1]);
  }
});
