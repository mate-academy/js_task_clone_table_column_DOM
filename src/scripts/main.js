'use strict';

const table = document.querySelector('table');

const tableHeaderRow = table.tHead.rows[0];

cloneSecondColumn(tableHeaderRow);

const tableBodyRows = table.tBodies[0].rows;

Array.from(tableBodyRows).forEach((row) => {
  cloneSecondColumn(row);
});

const tableFooterRow = table.tFoot.rows[0];

cloneSecondColumn(tableFooterRow);

function cloneSecondColumn(row) {
  const cells = row.cells;
  const clonedSecond = cells[1].cloneNode(true);
  const clonedLast = cells[cells.length - 1].cloneNode(true);

  row.replaceChild(clonedSecond, cells[cells.length - 1]);
  row.appendChild(clonedLast);
}
