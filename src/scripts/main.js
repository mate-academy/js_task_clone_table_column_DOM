'use strict';

function copyCells(rows, cellTag) {
  for (const row of rows) {
    const cell = document.createElement(cellTag);

    cell.textContent = row.cells[1].textContent;
    row.lastElementChild.before(cell);
  }
}

const table = document.querySelector('table');

copyCells(table.tHead.rows, 'th');
copyCells(table.tBodies[0].rows, 'td');
copyCells(table.tFoot.rows, 'th');
