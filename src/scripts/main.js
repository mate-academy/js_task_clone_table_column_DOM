'use strict';

// write your code here
const table = document.body.querySelectorAll('thead, tbody, tfoot');

for (const section in table) {
  const rows = section.querySelectorAll('tr');

  rows.forEach((row) => {
    const cells = row.querySelectorAll('th, td');
    const clonedCells = cells[1].cloneNode(true);

    row.insertBefore(clonedCells, cells[cells.length - 1]);
  });
}
