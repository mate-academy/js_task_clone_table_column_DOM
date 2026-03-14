'use strict';

const list = document.querySelectorAll('thead, tbody, tfoot');

for (const section of list) {
  const rows = section.querySelectorAll('tr');

  for (const row of rows) {
    const cell = row.cells[1];

    if (!cell) {
      continue;
    }

    const clone = cell.cloneNode(true);
    const last = row.cells[row.cells.length - 1];

    if (last) {
      row.insertBefore(clone, last);
    } else {
      row.appendChild(clone);
    }
  }
}
