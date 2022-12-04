'use strict';

const rowsOfTable = [...document.querySelector('table').rows];

rowsOfTable.forEach(row => {
  const cell = row.cells[1];

  row.insertBefore(cell.cloneNode(true), row.children[4]);
});
