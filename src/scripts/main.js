'use strict';

// write your code here

const table = document.querySelector('table');

const sections = [];

if (table.tHead) sections.push(table.tHead);
sections.push(...table.tBodies);
if (table.tFoot) sections.push(table.tFoot);

for (const section of sections) {
  for (const row of section.rows) {
    const secondCell = row.cells[1];
    if (!secondCell) continue;
    const newCell = secondCell.cloneNode(true);
    row.insertBefore(newCell, row.cells[row.cells.length - 1]);
  }
}
