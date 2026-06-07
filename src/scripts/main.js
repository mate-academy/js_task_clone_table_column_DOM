'use strict';

const table = document.querySelector('table');

const column1 = copyColumn(table, 2);

appendColumn(table, column1, 5);

function copyColumn(targetTable, columnOrder) {
  const tableRows = targetTable.rows;
  // access all the rows from the table

  const copiedColumn = [];

  for (let i = 0; i < tableRows.length; i++) {
    const clonedCell = tableRows[i].cells[columnOrder - 1].cloneNode(true);
    // access the row's child in the desired order

    copiedColumn.push(clonedCell);
    // push this cell to the list of copied column
  }

  return copiedColumn;
}

function appendColumn(targetTable, columnToAppend, position) {
  const tableRows = targetTable.rows;
  // access all the rows from the table

  for (let i = 0; i < columnToAppend.length; i++) {
    tableRows[i].children[position - 1].before(columnToAppend[i]);
    // add cell before n-th child of tableRows
  }
}

// const tableRowLength = tableRows[0].cells.length;
// count the length of row

// if (position > tableRowLength) {
//   // if position is bigger than the length, append to the end
//   for (let i = 0; i < columnToAppend.length; i++) {
//     tableRows[i].children[tableRowLength - 1].after(columnToAppend[i]);
//   }
// } else {
//   // otherwise append it at the appropriate position
//   for (let i = 0; i < columnToAppend.length; i++) {
//     tableRows[i].children[position].before(columnToAppend[i]);
//     // add cell before n-th child of tableRows
//   }
// }
