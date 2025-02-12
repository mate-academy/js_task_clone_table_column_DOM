'use strict';

const table = document.querySelector('table');
const rowsArray = Array.from(table.rows);
const columnsOrder = [0, 1, 2, 3, 1, 4];

// Detach table to optimize handling of large tables
const tableParent = table.parentNode;

tableParent.removeChild(table);

rowsArray.forEach((row) => {
  const cellsArray = Array.from(row.cells);
  const rowFragment = document.createDocumentFragment();
  const rowLength = cellsArray.length;

  columnsOrder.forEach((index) => {
    let cellContent;

    if (index < rowLength) {
      cellContent = cellsArray[index].cloneNode(true);
    } else {
      cellContent = document.createElement('td');
      cellContent.textContent = 'no data';
    }

    rowFragment.appendChild(cellContent);
  });

  row.innerHTML = '';
  row.appendChild(rowFragment);
});

// Reattach table
tableParent.appendChild(table);
