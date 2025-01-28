'use strict';

const allRows = document.querySelectorAll('tbody tr');
const headerRow = document.querySelector('thead tr');
const footerRow = document.querySelector('tfoot tr');

allRows.forEach((row) => {
  const cells = row.querySelectorAll('td');

  if (cells.length > 1) {
    const secondCell = cells[1];
    const newCell = document.createElement('td');

    newCell.textContent = secondCell.textContent;

    const lastCell = cells[cells.length - 1];

    row.insertBefore(newCell, lastCell);
  }
});

if (headerRow) {
  const headerCells = headerRow.querySelectorAll('th');

  if (headerCells.length > 1) {
    const newHeaderCell = document.createElement('th');

    newHeaderCell.textContent = headerCells[1].textContent;

    const lastHeaderCell = headerCells[headerCells.length - 1];

    headerRow.insertBefore(newHeaderCell, lastHeaderCell);
  }
}

if (footerRow) {
  const footerCells = footerRow.querySelectorAll('th');

  if (footerCells.length > 1) {
    const newFooterCell = document.createElement('th');

    newFooterCell.textContent = footerCells[1].textContent;

    const lastFooterCell = footerCells[footerCells.length - 1];

    footerRow.insertBefore(newFooterCell, lastFooterCell);
  }
}
