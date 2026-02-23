'use strict';

const table = document.querySelector('table');
const allSections = table.querySelectorAll('thead tr, tbody tr, tfoot tr');

for (const row of allSections) {
  if (row.cells.length >= 2) {
    const second = row.cells[1];
    const clone = second.cloneNode(true);
    const last = row.cells[row.cells.length - 1];

    row.insertBefore(clone, last);
  }
}
