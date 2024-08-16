'use strict';

const table = document.querySelector('table');

const targetColumn = 1;
const tHead = table.tHead.rows[0];
const tFoot = table.tFoot.rows[0];
const bodyRows = table.tBodies[0].rows;
const newHeading = tHead.cells[targetColumn].cloneNode(true);
const newFooterHeading = tFoot.cells[targetColumn].cloneNode(true);

tHead.lastElementChild.before(newHeading);
tFoot.lastElementChild.before(newFooterHeading);

for (const row of bodyRows) {
  const newRowData = row.cells[targetColumn].cloneNode(true);

  row.lastElementChild.before(newRowData);
}
