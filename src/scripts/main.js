'use strict';

const table = document.querySelector('table');
const headerRow = table.querySelector('thead tr');
const bodyRows = table.querySelectorAll('tbody tr');
const footerRow = table.querySelector('tfoot tr');

function cloneAndInsertColumn() {
  const secondHeaderCell = headerRow.children[1];
  const clonedHeaderCell = secondHeaderCell.cloneNode(true);
  const lastHeaderCell = headerRow.children[headerRow.children.length - 1];

  headerRow.insertBefore(clonedHeaderCell, lastHeaderCell);

  bodyRows.forEach((row) => {
    const secondCell = row.children[1];
    const clonedCell = secondCell.cloneNode(true);
    const lastCell = row.children[row.children.length - 1];

    row.insertBefore(clonedCell, lastCell);
  });

  const secondFooterCell = footerRow.children[1];
  const clonedFooterCell = secondFooterCell.cloneNode(true);
  const lastFooterCell = footerRow.children[footerRow.children.length - 1];

  footerRow.insertBefore(clonedFooterCell, lastFooterCell); // SKRÓCONA LINIA
}

cloneAndInsertColumn();
