'use strict';

// write your code here

const table = document.querySelector('table');
const sections = [table.tHead, ...table.tBodies, table.tFoot];

for (const section of sections) {
  if (section) {
    for (const row of section.rows) {
      const cellToCopy = row.cells[1];
      const index = 4;
      const clone = cellToCopy.cloneNode(true);

      if (cellToCopy) {
        row.insertBefore(clone, row.cells[index]);
      }
    }
  }
}
