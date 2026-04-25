'use strict';

// write your code here
function cloneColumn(initialNumber, insertNumber) {
  const table = document.querySelector('table');
  const rows = table.rows;

  for (const row of rows) {
    const cells = row.children;

    const newCell = document.createElement(cells[initialNumber].tagName);

    newCell.textContent = cells[initialNumber].textContent;

    if (insertNumber >= cells.length) {
      row.appendChild(newCell);
    } else {
      row.insertBefore(newCell, cells[insertNumber]);
    }
  }
}

cloneColumn(1, 4);
