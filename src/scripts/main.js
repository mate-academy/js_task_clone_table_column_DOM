'use strict';

const table = document.querySelector('table');
const rows = table.rows;

for (const row of rows) {
  const cells = row.cells;

  if (cells.length >= 5) {
    // Copy column Position (index 1)
    const positionCell = cells[1];
    const clonedCell = positionCell.cloneNode(true);

    // Insert before Salary (index 4)
    row.insertBefore(clonedCell, cells[4]);
  }
}
