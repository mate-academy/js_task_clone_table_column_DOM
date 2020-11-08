'use strict';

const tHead = document.querySelector('thead');
const tBody = document.querySelector('tbody');
const tFoot = document.querySelector('tfoot');

tHead.rows[0]
  .insertBefore(tHead.rows[0].cells[1].cloneNode(true), tHead.rows[0].cells[4]);

tFoot.rows[0]
  .insertBefore(tFoot.rows[0].cells[1].cloneNode(true), tFoot.rows[0].cells[4]);

for (const row of tBody.rows) {
  row.insertBefore(row.cells[1].cloneNode(true), row.cells[4]);
}
