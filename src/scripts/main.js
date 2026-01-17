'use strict';

const table = document.querySelector('table');

// We will process thead, tbody, and tfoot (if they exist)
const groups = [table.tHead, table.tBodies[0], table.tFoot];

groups.forEach((group) => {
  if (!group) {
    return;
  }

  [...group.rows].forEach((row) => {
    const cells = row.cells;

    // Clone the second column (index 1)
    const cloned = cells[1].cloneNode(true);

    // Insert before the last column
    row.insertBefore(cloned, cells[cells.length - 1]);
  });
});
