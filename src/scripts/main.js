'use strict';

// write your code here
const table = document.querySelector('table');
const rows = table.querySelectorAll('tbody tr');

rows.forEach(row => {
  const secondCell = row.cells[1];

  const clonedCell = secondCell.cloneNode(true);

  row.insertBefore(clonedCell, row.cells[row.cells.length - 1]);
});

const headerRow = table.querySelector('thead tr');
const newHeaderCell = document.createElement('th');
const copyCellName = Array.from(headerRow.children);

newHeaderCell.textContent = copyCellName[1].textContent;
headerRow.lastElementChild.insertAdjacentElement('beforebegin', newHeaderCell);

const footerRow = table.querySelector('tfoot tr');
const newFooterCell = document.createElement('th');

newFooterCell.textContent = copyCellName[1].textContent;
footerRow.lastElementChild.insertAdjacentElement('beforebegin', newFooterCell);
