'use strict';

function copyCell(row, indexFrom, indexTo) {
  const cell = row.cells[indexFrom];

  const cellCopy = cell.cloneNode(true);
  const targetSibling = row.cells[indexTo - 1];

  targetSibling.after(cellCopy);
}

function copyCells(tElement, indexFrom, indexTo) {
  const { rows } = tElement;

  [...rows].forEach((row) => {
    copyCell(row, indexFrom, indexTo);
  });
}

function copyColumn(table, indexFrom, indexTo) {
  const { tHead, tBodies, tFoot } = table;
  const tableElementsArray = [tHead, tBodies[0], tFoot];

  tableElementsArray.forEach((tableElement) => {
    copyCells(tableElement, indexFrom, indexTo);
  });
}

const tableSelector = document.querySelector('table');

copyColumn(tableSelector, 1, 4);
