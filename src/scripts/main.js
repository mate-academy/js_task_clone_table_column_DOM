'use strict';

// write your code here
const tHead = document.querySelector('thead');
const tBody = document.querySelector('tbody');
const tFoot = document.querySelector('tfoot');
const sections = [tHead, tBody, tFoot];

for (const section of sections) {
  if (!section) {
    continue;
  }
  const rows = Array.from(section.rows);
  for (const row of rows) {
    if (row.cells.length > 1) {
      const source = row.cells[1];
      const clone = source.cloneNode(true);
      const ref = row.cells[row.cells.length - 1];
      row.insertBefore(clone, ref);
    }
  }
}
