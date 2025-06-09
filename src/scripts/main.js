'use strict';

const table = document.querySelector('table');
const columnIndex = 1;
const rows = Array.from(table.rows);

const columnValues = rows.map((row) => {
  return row.cells[columnIndex].textContent;
});

rows.forEach((row, i) => {
  const isHeaderOrFooter =
    row.parentElement.tagName === 'THEAD' ||
    row.parentElement.tagName === 'TFOOT';

  const newCell = isHeaderOrFooter
    ? document.createElement('th')
    : document.createElement('td');

  newCell.textContent = columnValues[i];

  const insertIndex = columnIndex + 3;
  const referenceCell = row.cells[insertIndex];

  if (referenceCell) {
    row.insertBefore(newCell, referenceCell);
  } else {
    row.appendChild(newCell);
  }
});
