'use strict';

const table = document.querySelector('table');

const rows = table.querySelectorAll('tbody tr');

const newHeaderCell = document.createElement('th');

newHeaderCell.textContent = 'Position';

const headerRow = table.querySelector('thead tr');

headerRow.insertBefore(
  newHeaderCell,
  headerRow.children[headerRow.children.length - 1],
);

const newFooterCell = newHeaderCell.cloneNode(true);

const footerRow = table.querySelector('tfoot tr');

footerRow.insertBefore(
  newFooterCell,
  footerRow.children[footerRow.children.length - 1],
);

rows.forEach(function (row) {
  const position = row.querySelector('td:nth-child(2)').textContent;

  const newCell = document.createElement('td');

  newCell.textContent = position;

  const referenceCell = row.querySelector('td:nth-last-child(2)');

  referenceCell.parentNode.insertBefore(newCell, referenceCell.nextSibling);
});
