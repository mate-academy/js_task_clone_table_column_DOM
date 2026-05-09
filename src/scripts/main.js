'use strict';

const table = document.querySelector('table');
const sections = [table.tHead, ...table.tBodies, table.tFoot];

for (const section of sections) {
  for (const row of section.rows) {
    const cloned = row.cells[1].cloneNode(true);
    row.insertBefore(cloned, row.cells[row.cells.length - 1]);
  }
}
