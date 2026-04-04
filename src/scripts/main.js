'use strict';

// write your code here
const table = document.querySelector('table');
const thead = table.tHead;
const tbody = table.tBodies[0];
const tfoot = table.tFoot;

function processRows(rows) {
  for (const row of rows) {
    const cells = row.querySelectorAll('th, td');
    const sourceCell = cells[1];

    if (!sourceCell) {
      continue;
    }

    const clone = sourceCell.cloneNode(true);
    const insertBeforeCell = cells[cells.length - 1];

    row.insertBefore(clone, insertBeforeCell);
  }
}

processRows(thead.rows);
processRows(tbody.rows);
processRows(tfoot.rows);
