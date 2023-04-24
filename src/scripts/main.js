'use strict';

const rows = document.querySelectorAll('table tbody tr');

rows.forEach(row => {
  const newCell = document.createElement('td');

  newCell.textContent = row.cells[1].textContent;

  row.insertBefore(newCell, row.cells[row.cells.length - 1]);
});

const tfoot = document.querySelector('table tfoot tr');
const newFooterCell = document.createElement('th');

newFooterCell.textContent = 'Position';
tfoot.insertBefore(newFooterCell, tfoot.cells[tfoot.cells.length - 1]);

const thead = document.querySelector('table thead tr');
const newHeaderCell = document.createElement('th');

newHeaderCell.textContent = 'Position';
thead.insertBefore(newHeaderCell, thead.cells[thead.cells.length - 1]);
