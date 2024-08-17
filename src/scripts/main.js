'use strict';

const table = document.querySelector('table');
const [thead, tbody, tfoot] = table.children;

function cloneColumn(columnIndex) {
  const headerCell = thead.querySelectorAll('th')[columnIndex];
  const newHeaderCell = headerCell.cloneNode(true);

  thead.querySelector('tr').appendChild(newHeaderCell);

  tbody.querySelectorAll('tr').forEach((row) => {
    const cell = row.querySelectorAll('td')[columnIndex];
    const newCell = cell.cloneNode(true);

    row.appendChild(newCell);
  });

  const footerCell = tfoot.querySelectorAll('th')[columnIndex];
  const newFooterCell = footerCell.cloneNode(true);

  tfoot.querySelector('tr').appendChild(newFooterCell);
}

cloneColumn(1);
