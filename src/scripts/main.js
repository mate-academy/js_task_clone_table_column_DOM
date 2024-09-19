'use strict';

const tableForPeople = document.querySelector('table');
const tHead = tableForPeople.querySelector('thead');
const tFoot = tableForPeople.querySelector('tfoot');
const tBody = tableForPeople.querySelector('tbody');

const tHeadElement = tHead.rows[0];
const tFootElement = tFoot.rows[0];

function addCollumn(table, columnIndex, position) {
  const rows = tBody.rows;

  for (const row of rows) {
    const bodyCopyItem = document.createElement('td');

    bodyCopyItem.textContent = row.cells[1].textContent;
    row.insertBefore(bodyCopyItem, row.cells[position]);
  }

  const positionCopyHead = document.createElement('th');
  const positionCopyFoot = document.createElement('th');

  positionCopyHead.textContent = 'Position';
  positionCopyFoot.textContent = 'Position';
  tHeadElement.insertBefore(positionCopyHead, tHead.rows[0].cells[position]);
  tFootElement.insertBefore(positionCopyFoot, tFoot.rows[0].cells[position]);
}

addCollumn(tableForPeople, 1, 4);
