'use strict';

document.addEventListener('DOMContentLoaded', function() {
  const table = document.querySelector('table');
  const secondColumn = cloneColumn(table, 2);

  insertColumn(table, secondColumn, 4);
});

function cloneColumn(table, columnIndex) {
  const clonedColumn = [];
  const rows = table.querySelectorAll('tr');

  rows.forEach((row) => {
    const cells = row.children;
    const originalCell = cells[columnIndex - 1];
    const clonedCell = originalCell.cloneNode(true);

    clonedColumn.push(clonedCell);
  });

  return clonedColumn;
}

function insertColumn(table, column, index) {
  const rows = table.querySelectorAll('tr');

  rows.forEach((row, rowIndex) => {
    const cells = row.children;

    if (index < cells.length) {
      row.insertBefore(column[rowIndex], cells[index]);
    } else {
      row.appendChild(column[rowIndex]);
    }
  });
}
