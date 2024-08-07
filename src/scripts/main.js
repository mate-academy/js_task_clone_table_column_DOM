'use strict';

function duplicateColumn(section, rowIndex = 0, cellIndex = 1) {
  const rows = table
    .getElementsByTagName(section)[0]
    .getElementsByTagName('tr');
  const row = rows[rowIndex];
  const cells = row.children;

  const cellsArray = Array.from(cells);

  const newCell = cellsArray[cellIndex].cloneNode(true);

  cellsArray.splice(cellsArray.length - 1, 0, newCell);

  row.innerHTML = '';
  cellsArray.forEach((cell) => row.appendChild(cell));
}

const table = document.getElementsByTagName('table')[0];

duplicateColumn('thead');

const body = table.getElementsByTagName('tbody')[0].getElementsByTagName('tr');

for (let i = 0; i < body.length; i++) {
  duplicateColumn('tbody', i);
}

duplicateColumn('tfoot');
