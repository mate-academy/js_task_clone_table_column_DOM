'use strict';

const table = document.querySelector('table');
const thead = table.querySelector('thead');
const tbody = table.querySelector('tbody');
const tfoot = table.querySelector('tfoot');

function cloneColumn(columnIndex) {
  const rows = Array.from(tbody.querySelectorAll('tr'));

  const headerCell = thead.querySelectorAll('th')[columnIndex];
  const newHeaderCell = document.createElement('th');

  newHeaderCell.textContent = headerCell.textContent;

  thead
    .querySelector('tr')
    .insertBefore(newHeaderCell, thead.querySelector('tr').lastElementChild);

  rows.forEach((row) => {
    const cells = Array.from(row.querySelectorAll('td'));
    const cellToClone = cells[columnIndex];
    const newCell = document.createElement('td');

    newCell.textContent = cellToClone.textContent;

    row.insertBefore(newCell, row.lastElementChild);
  });

  const footerCells = Array.from(
    tfoot.querySelector('tr').querySelectorAll('th'),
  );
  const footerCellToClone = footerCells[columnIndex];
  const newFooterCell = document.createElement('th');

  newFooterCell.textContent = footerCellToClone.textContent;

  tfoot
    .querySelector('tr')
    .insertBefore(newFooterCell, tfoot.querySelector('tr').lastElementChild);
}

cloneColumn(1);
