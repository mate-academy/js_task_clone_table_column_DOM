'use strict';

function copyColumn(columnIndex) {
  const table = document.querySelector('table');
  const columnData = [];

  for (let i = 0; i < table.rows.length; i++) {
    const cell = table.rows[i].cells[columnIndex];

    if (cell) {
      columnData.push(cell.textContent.trim());
    }
  }

  return columnData;
}

function insertColumn(data) {
  const table = document.querySelector('table');

  for (let i = 0; i < table.rows.length; i++) {
    const newCell = table.rows[i].insertCell(4);

    newCell.textContent = data[i];
  }
}

insertColumn(copyColumn(1));
