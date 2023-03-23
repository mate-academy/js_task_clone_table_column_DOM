'use strict';

// write your code here
const table = document.querySelector('table');
const head = table.tHead;
const body = table.tBodies[0];
const footer = table.tFoot;

const headLastCell = head.rows[0].cells.length;
const footerLastCell = footer.rows[0].cells.length;

head.rows[0]
  .cells[headLastCell - 1]
  .before(head.rows[0].cells[1].cloneNode(true));

footer.rows[0]
  .cells[footerLastCell - 1]
  .before(footer.rows[0].cells[1].cloneNode(true));

for (const row of body.rows) {
  const rowLastCell = row.cells.length;

  row
    .cells[rowLastCell - 1]
    .before(row.cells[1].cloneNode(true));
}
