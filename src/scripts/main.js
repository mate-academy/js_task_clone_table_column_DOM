'use strict';

// write your code here
const table = document.querySelector('table');

function cloneSecondColumnBeforeLast() {
  const sections = [`tbody`, `thead`, `tfoot`];

  sections.forEach((sectionName) => {
    const section = table.querySelector(sectionName);

    if (!section) {
      return;
    }

    for (const row of section.rows) {
      if (row.cells.length < 2) {
        continue;
      }

      const secondCell = row.cells[1];
      const clone = secondCell.cloneNode(true);

      row.insertBefore(clone, row.cells[row.cells.length - 1]);
    }
  });
}

cloneSecondColumnBeforeLast();
