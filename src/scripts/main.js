'use strict';

// write your code here
const table = document.querySelector('table');
const sections = ['thead', 'tbody', 'tfoot'];

for (const sectionName of sections) {
  const section = table.querySelector(sectionName);

  if (section) {
    for (const row of section.rows) {
      const cells = row.cells;

      if (cells.length < 2) {
        continue;
      }

      const secondCell = cells[1];
      const lastIndex = cells.length - 1;
      const clone = secondCell.cloneNode(true);

      row.insertBefore(clone, cells[lastIndex]);
    }
  }
}
