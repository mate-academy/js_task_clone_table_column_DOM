'use strict';

const table = document.body.firstElementChild;
const tableHead = table.tHead;
const tableFooter = table.tFoot;
const tableBody = table.tBodies[0];

function cloneAndInsertColumn(tableSection) {
  Array.from(tableSection.rows).forEach((row) => {
    const secondCellClone = row.cells[1].cloneNode(true);
    const lastCell = row.cells[row.cells.length - 1];

    lastCell.before(secondCellClone);
  });
}

cloneAndInsertColumn(tableHead);
cloneAndInsertColumn(tableFooter);
cloneAndInsertColumn(tableBody);
