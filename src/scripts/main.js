'use strict';

// write your code here

const table = document.querySelector('table');
const listRows = table.rows;

[...listRows].forEach(tr => {
  const arrCells = tr.cells;
  // get length of cells
  const lengthCells = arrCells.length;
  // the number of the cell to which we will clone
  const numberTd = 1;
  // get td which will be clone
  const td = tr.cells[numberTd];

  tr.cells[lengthCells - 1].before(td.cloneNode(true));
});
