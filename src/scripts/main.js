'use strict';

const tableElement = document.querySelector('table');
const tableRows = [...tableElement.rows];

tableRows.forEach((tableRow) => {
  const newCellElement = tableRow.cells[1].cloneNode(true);
  const lastCellElement = tableRow.lastElementChild;

  lastCellElement.before(newCellElement);
});
