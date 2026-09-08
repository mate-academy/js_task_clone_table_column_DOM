'use strict';

const table = document.querySelector('table');

const headerRow = table.querySelector('thead tr');
const headerCell = headerRow.children[1];
const headerCopy = headerCell.cloneNode(true);

headerRow.insertBefore(headerCopy, headerRow.children[4]);

const rows = table.querySelectorAll('tbody tr');

rows.forEach((row) => {
  const positionCell = row.children[1];
  const positionCopy = positionCell.cloneNode(true);

  row.insertBefore(positionCopy, row.children[4]);
});

const footerRow = table.querySelector('tfoot tr');

if (footerRow) {
  const footerCell = footerRow.children[1];
  const footerCopy = footerCell.cloneNode(true);

  footerRow.insertBefore(footerCopy, footerRow.children[4]);
}
