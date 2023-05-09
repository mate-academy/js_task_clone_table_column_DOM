'use strict';

const rowsOfTable = [...document.querySelector('table').rows];

rowsOfTable.forEach(row => {
  const cellForCloning = row.cells[1];
  const lastCell = row.lastElementChild;

  lastCell.before(cellForCloning.cloneNode(true));
});
