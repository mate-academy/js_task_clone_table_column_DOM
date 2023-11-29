'use strict';

const rows = document.querySelectorAll('tr');

for (const row of rows) {
  const clonedCell = row.cells[4].cloneNode(true);

  row.cells[4].textContent = row.cells[1].textContent;
  row.appendChild(clonedCell);
}
