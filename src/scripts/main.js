'use strict';

const dashboard = document.querySelector('table');
const rows = dashboard.rows;

function getColumn(columnNumberForCopy) {
  const column = [];

  for (let i = 0; i < rows.length; i++) {
    column.push(rows[i].cells[columnNumberForCopy - 1]);
  }

  return column;
}

function createColumn(column, columnNumberAfterPast) {
  for (let i = 0; i < rows.length; i++) {
    rows[i].children[columnNumberAfterPast - 1]
      .before(column[i].cloneNode(true));
  }
}
createColumn(getColumn(2), 5);
