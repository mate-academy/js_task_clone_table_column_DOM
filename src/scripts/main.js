'use strict';

const table = document.querySelector('table');
const arrayFromRows = Array.from(table.rows);

function copyColumnForIndex(index) {
  return arrayFromRows.map((row) => row.cells[index]);
}

function insertColumnBetween(rows, afterIndex, cellsToInsert) {
  rows.forEach((row, i) => {
    const referenceCell = row.cells[afterIndex];

    const clonedCell = cellsToInsert[i].cloneNode(true);

    row.insertBefore(clonedCell, referenceCell);
  });
}

const insertColumns = copyColumnForIndex(1);

insertColumnBetween(arrayFromRows, 4, insertColumns);
