'use strict';

// write your code here
const table = document.querySelector('table');
const tableRows = [...table.rows];

const pasteCellInRowByIndex = (index, cell) => {
  table.rows[index].cells[3].after(cell);
};

tableRows.forEach((row, i) => {
  const cellClone = row.cells[1].cloneNode(true);

  pasteCellInRowByIndex(i, cellClone);
});
