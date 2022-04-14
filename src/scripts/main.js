'use strict';

const table = document.querySelector('table');
const rows = [...table.rows];
const numberOfCells = rows[0].cells.length;

const getCloneOfCell = (listOfRows, numberOfCell) => {
  const clone = [];

  for (const row of listOfRows) {
    clone.push(row.cells[numberOfCell]);
  }

  return clone;
};

const addCloneOfCell = (listOfRows, cloneOfCell) => {
  let i = 0;

  for (const row of listOfRows) {
    while (i <= cloneOfCell.length) {
      row.children[numberOfCells - 1].before(cloneOfCell[i].cloneNode(true));
      i++;
      break;
    }
  }
};

addCloneOfCell(rows, getCloneOfCell(rows, 1));
