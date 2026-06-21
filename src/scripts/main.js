'use strict';

const tHead = document.querySelector('table thead');
const tBody = document.querySelector('table tbody');
const tFoot = document.querySelector('table tfoot');

if (tHead && tHead.rows.length > 0) {
  const headerRow = tHead.rows[0];
  const secondHeader = headerRow.cells[1];
  const lastHeader = headerRow.cells[headerRow.cells.length - 1];

  const newTh = document.createElement('th');

  newTh.textContent = secondHeader.textContent;
  headerRow.insertBefore(newTh, lastHeader);
}

for (const tr of tBody.rows) {
  const secondTd = tr.cells[1];
  const lastTd = tr.cells[tr.cells.length - 1];

  const newTd = document.createElement('td');

  newTd.textContent = secondTd.textContent;

  tr.insertBefore(newTd, lastTd);
}

if (tFoot && tFoot.rows.length > 0) {
  const footerRow = tFoot.rows[0];
  const secondFoot = footerRow.cells[1];
  const lastFoot = footerRow.cells[footerRow.cells.length - 1];

  const newThFoot = document.createElement('th');

  newThFoot.textContent = secondFoot.textContent;

  footerRow.insertBefore(newThFoot, lastFoot);
}
