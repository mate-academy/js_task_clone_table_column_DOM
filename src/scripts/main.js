'use strict';

function addCellWithFirstColumnText(selector) {
  const rows = document.querySelectorAll(selector);

  rows.forEach((row) => {
    const firstCellText = row.cells[1].textContent;

    const isHeaderRow =
      row.parentElement.tagName === 'THEAD' ||
      row.parentElement.tagName === 'TFOOT';
    const newCell = document.createElement(isHeaderRow ? 'th' : 'td');

    newCell.textContent = firstCellText;
    row.insertBefore(newCell, row.cells[4]);
  });
}

addCellWithFirstColumnText('tbody tr');
addCellWithFirstColumnText('thead tr');
addCellWithFirstColumnText('tfoot tr');
