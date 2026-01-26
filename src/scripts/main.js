'use strict';

const dashboard = document.querySelector('table');

const tableHead = dashboard.tHead;

const theadTr = tableHead.rows[0];
const theadSecondCell = theadTr.cells[1];
const theadlastCell = theadTr.cells[4];
const theadSecondCellClone = theadSecondCell.cloneNode(true);

theadTr.insertBefore(theadSecondCellClone, theadlastCell);

const tableBody = dashboard.tBodies[0];

for (const row of tableBody.rows) {
  const tbodySecondCellClone = row.cells[1].cloneNode(true);
  const tbodylastCell = row.cells[row.cells.length - 1];

  row.insertBefore(tbodySecondCellClone, tbodylastCell);
}

const tableFoot = dashboard.tFoot;

const tfootTr = tableFoot.rows[0];
const tfootSecondCell = tfootTr.cells[1];
const tfootlastCell = tfootTr.cells[4];
const tfootSecondCellClone = tfootSecondCell.cloneNode(true);

tfootTr.insertBefore(tfootSecondCellClone, tfootlastCell);
