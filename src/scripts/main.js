'use strict';

const table = document.querySelector('table');
const tableHead = table.tHead;
const tableBody = table.tBodies[0];
const tableFoot = table.tFoot;

[...tableHead.rows, ...tableBody.rows, ...tableFoot.rows].forEach((row) => {
  const clonedCell = row.children[1].cloneNode(true);

  row.children[row.children.length - 1].before(clonedCell);
});
