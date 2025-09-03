'use strict';

// write your code here
const table = document.querySelector('table');

if (table) {
  const sections = [table.tHead, table.tBodies[0], table.tFoot];

  sections.forEach((section) => {
    if (!section) {
      return;
    }

    const rowsArray = Array.from(section.rows);

    rowsArray.forEach((row) => {
      if (!row.cells[1] || !row.cells[row.cells.length - 1]) {
        return;
      }

      const clone = row.cells[1].cloneNode(true);

      row.insertBefore(clone, row.cells[row.cells.length - 1]);
    });
  });
}
