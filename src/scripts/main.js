'use strict';

const table = document.querySelector('table');
const rows = table.rows;

[...rows].forEach(row => {
  copyColumn(2, 4, row);
});

function copyColumn(sourceIndex, targetIndex, row) {
  const sourceCell = row.cells[sourceIndex - 1];

  [...row.cells].forEach((cell, index) => {
    if (index === targetIndex) {
      row.insertBefore(sourceCell.cloneNode(true), cell);
    }
  });
};
