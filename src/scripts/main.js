'use strict';

const table = document.querySelector('table');

const changeTable = Array.from(table.rows);

changeTable.forEach((element) => {
  const secondColumnClone = element.cells[1].cloneNode(true);

  const lastCell = element.cells[element.cells.length - 1];

  element.insertBefore(secondColumnClone, lastCell);
});
