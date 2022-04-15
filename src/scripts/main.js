'use strict';

const table = document.querySelector('table');
const rows = [...table.rows];

const addCloneOfCell = (listOfRows, numberOfCopyCell, addIndex) => {
  for (const row of listOfRows) {
    row.children[addIndex].after(row.cells[numberOfCopyCell].cloneNode(true));
  }
};

addCloneOfCell(rows, 1, 3);
