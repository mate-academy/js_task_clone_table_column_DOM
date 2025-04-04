'use strict';

const table = document.querySelector('table');
const rowsOfTable = document.querySelectorAll('tr');
const numberOfRows = rowsOfTable.length;

function addColumn(tableInfo) {
  for (let i = 0; i < numberOfRows; i++) {
    let position = '';
    let salary = '';
    const row = rowsOfTable[i];

    position = row.cells[1].textContent;
    salary = row.cells[4].textContent;

    row.cells[4].textContent = position;

    const newCell = row.insertCell(5);

    newCell.textContent = salary;
  }
}

addColumn(table);
