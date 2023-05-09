'use strict';

const table = document.querySelector('table');

const heads = table.tHead.rows;
const rows = table.tBodies[0].rows;
const foots = table.tFoot.rows;

for (let i = 0; i < heads.length; i++) {
  const cell = heads[i].cells[1];
  const clone = cell.cloneNode(true);
  const lastCell = heads[i].cells[heads[i].cells.length - 1];

  heads[i].insertBefore(clone, lastCell);
}

for (let i = 0; i < rows.length; i++) {
  const cell = rows[i].cells[1];
  const clone = cell.cloneNode(true);
  const lastCell = rows[i].cells[rows[i].cells.length - 1];

  rows[i].insertBefore(clone, lastCell);
}

for (let i = 0; i < foots.length; i++) {
  const cell = foots[i].cells[1];
  const clone = cell.cloneNode(true);
  const lastCell = foots[i].cells[foots[i].cells.length - 1];

  foots[i].insertBefore(clone, lastCell);
}
