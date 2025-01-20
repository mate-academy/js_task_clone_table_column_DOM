'use strict';

const table = document.querySelector('table');

const columnName = 'Position';
const columnIndex = Array.from(table.rows[0].cells).findIndex((ce) => {
  return ce.textContent === columnName;
});

if (columnIndex !== -1) {
  const rows = table.rows;
  const columnData = [];

  for (let i = 0; i < rows.length; i++) {
    const cell = rows[i].cells[columnIndex];

    columnData.push(cell.cloneNode(true));
  }

  const insertIndex = rows[0].cells.length - 1;

  for (let i = 0; i < rows.length; i++) {
    rows[i].insertBefore(columnData[i], rows[i].cells[insertIndex]);
  }
}
