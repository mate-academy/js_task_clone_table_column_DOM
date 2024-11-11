'use strict';

// write your code here
const table = document.querySelector('table');
const thead = document.querySelector('thead');
const tfoot = document.querySelector('tfoot');
const rows = table.querySelectorAll('tbody tr');

const headerCells = thead.querySelectorAll('th');
const secondHeaderCell = headerCells[1];
const clonedHeaderCell = secondHeaderCell.cloneNode(true);
const fourthHeaderCell = headerCells[3];

fourthHeaderCell.after(clonedHeaderCell);

const footerCells = tfoot.querySelectorAll('th');
const secondFooterCell = footerCells[1];
const clonedFooterCell = secondFooterCell.cloneNode(true);
const fourthFooterCell = footerCells[3];

fourthFooterCell.after(clonedFooterCell);

rows.forEach((row) => {
  const secondColumn = row.querySelector('td:nth-child(2)');

  const cloneSecondColumn = secondColumn.cloneNode(true);

  const fourthColumn = row.querySelector('td:nth-child(4)');

  fourthColumn.after(cloneSecondColumn);
});
