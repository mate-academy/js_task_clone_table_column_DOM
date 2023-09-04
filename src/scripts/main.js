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
const footerRow = table.querySelector('tfoot tr');

function insertCellInHeaderAndFooter(contentCell) {
  const newCell = document.createElement('th');

  newCell.textContent = contentCell.textContent;
  headerRow.lastElementChild.insertAdjacentElement('beforebegin', newCell);

  const newFooterCell = newCell.cloneNode(true);

  footerRow.lastElementChild
    .insertAdjacentElement('beforebegin', newFooterCell);
}

const contentHeaderCell = headerRow.querySelector('th:nth-child(2)');

insertCellInHeaderAndFooter(contentHeaderCell);
