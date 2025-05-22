'use strict';

const table = document.querySelector('table');

const positionHead = table.tHead.rows[0].cells[1];
const positionFoot = table.tFoot.rows[0].cells[1];
const copyPositionHead = positionHead.cloneNode(true);
const copyPositionFoot = positionFoot.cloneNode(true);

table.tHead.rows[0].cells[3].after(copyPositionHead);
table.tFoot.rows[0].cells[3].after(copyPositionFoot);

const rows = table.tBodies[0].rows;

for (const row of rows) {
  const positionCell = row.cells[1];
  const copyCell = positionCell.cloneNode(true);

  row.cells[3].after(copyCell);
}
