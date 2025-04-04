'use strict';

// write your code here

const tableHead = document.querySelector('thead');
const tableBody = document.querySelector('tbody');
const tableFoot = document.querySelector('tfoot');

function cloneCell(cell) {
  return cell.cloneNode(true);
}

function insertCloneCell(row, cellToInsert) {
  row.insertBefore(cellToInsert, row.lastElementChild);
}

function cloneColumn(tableSection, columnIndex) {
  const rows = tableSection.querySelectorAll('tr');

  rows.forEach((row) => {
    const cellToClone = row.cells[columnIndex - 1];
    const clonedCell = cloneCell(cellToClone);

    insertCloneCell(row, clonedCell);
  });
}

cloneColumn(tableHead, 2);
cloneColumn(tableBody, 2);
cloneColumn(tableFoot, 2);
