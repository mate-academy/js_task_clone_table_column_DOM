'use strict';

const sections = document.querySelectorAll(
  'table thead, table tbody, table tfoot',
);

sections.forEach((section) => {
  Array.from(section.rows).forEach((row) => {
    const secondCell = row.cells[1];
    const clonedCell = secondCell.cloneNode(true);
    const lastCell = row.cells[row.cells.length - 1];

    row.insertBefore(clonedCell, lastCell);
  });
});
