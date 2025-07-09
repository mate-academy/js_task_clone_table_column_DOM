'use strict';

const tr = document.querySelectorAll('tr');

for (const row of tr) {
  const cells = row.querySelectorAll('td, th');

  if (cells.length >= 2) {
    const clonedCell = cells[1].cloneNode(true);

    row.insertBefore(clonedCell, cells[cells.length - 1]);
  }
}
