'use strict';

// write your code here
const table = document.querySelector('table');
const theadRows = table.tHead.rows;
const tbodyRows = table.tBodies[0].rows;
const tfootRows = table.tFoot.rows;

const columnIndexToClone = 1;
const insertBeforeIndex = table.rows[0].cells.length - 1;

function cloneAndInsertCell(row, indexToClone, insertBefore) {
  const clonedCell = row.cells[indexToClone].cloneNode(true);

  row.insertBefore(clonedCell, row.cells[insertBefore]);
}

[theadRows, tbodyRows, tfootRows].forEach((section) => {
  for (const row of section) {
    cloneAndInsertCell(row, columnIndexToClone, insertBeforeIndex);
  }
});
