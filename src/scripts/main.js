'use strict';

const table = document.querySelector('table');
const tableRows = table.rows;
const tableColumn = getTableColumn(tableRows, 1);

addTableColumn(tableRows, tableColumn, 4);

function getTableColumn(rows, columnIndex) {
  const column = [];

  for (const row of rows) {
    column.push(row.cells[columnIndex].cloneNode(true));
  }

  return column;
}

function addTableColumn(rows, column, columnIndex) {
  for (let i = 0; i < column.length; i++) {
    rows[i].cells[columnIndex].before(column[i]);
  }
}
