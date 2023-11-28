'use strict';

const rows = document.querySelectorAll('tr');

for (const [index, row] of rows.entries()) {
  if (index === 0 || index === rows.length - 1) {
    const clonedCell = row.cells[4].cloneNode(true);

    row.cells[4].textContent = row.cells[1].textContent;
    row.appendChild(clonedCell);
  } else {
    const clonedCell = row.cells[4].cloneNode(true);

    row.cells[4].textContent = row.cells[1].textContent;
    row.appendChild(clonedCell);
  }
}
