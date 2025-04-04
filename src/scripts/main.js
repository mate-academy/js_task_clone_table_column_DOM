'use strict';

const tHeadRow = document.querySelector('thead tr');
const tFootRow = document.querySelector('tfoot tr');
const tBodyRows = document.querySelectorAll('tbody tr');

function copyColumn(target, destination) {
  const newTHeadCell = document.createElement('th');
  const newTFootCell = document.createElement('th');

  addCell(tHeadRow, newTHeadCell, target, destination);
  addCell(tFootRow, newTFootCell, target, destination);

  tBodyRows.forEach((tr, i) => {
    const newTBodyCell = document.createElement('td');

    addCell(tr, newTBodyCell, target, destination);
  });
}

function addCell(row, cell, target, destination) {
  cell.textContent = row.cells[target - 1].textContent;
  row.cells[destination - 1].insertAdjacentElement('afterend', cell);
}

copyColumn(2, 4);
