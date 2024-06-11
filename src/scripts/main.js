'use strict';

const table = document.querySelector('table');

const theadRow = table.querySelector('thead tr');
const secondColumnHeader = theadRow.querySelector('th:nth-child(2)');
const clonedHeader = secondColumnHeader.cloneNode(true);

theadRow.insertBefore(clonedHeader, theadRow.querySelector('th:last-child'));

const rows = table.querySelectorAll('tbody tr');

rows.forEach((row) => {
  const secondColumnCell = row.querySelector('td:nth-child(2)');
  const clonedCell = secondColumnCell.cloneNode(true);

  row.insertBefore(clonedCell, row.querySelector('td:last-child'));
});

const footerRows = table.querySelectorAll('tfoot tr');

footerRows.forEach((row) => {
  const secondColumnFooterCell = row.querySelector('th:nth-child(2)');
  const clonedFooterCell = secondColumnFooterCell.cloneNode(true);

  row.insertBefore(clonedFooterCell, row.querySelector('th:last-child'));
});
