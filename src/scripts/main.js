'use strict';

const table = document.querySelector('table');
const rows = table.querySelectorAll('tr');

const copy = [...rows].map(row => {
  return [...row.cells].find(cell => {
    const copyIndex = 1;

    if (cell.cellIndex === copyIndex) {
      return cell;
    }
  });
});

for (let i = 0; i < rows.length; i++) {
  const insertIndex = rows[i].cells.length - 1;

  rows[i].insertBefore(copy[i].cloneNode(true),
    rows[i].cells[insertIndex]);
}
