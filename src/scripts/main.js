'use strict';

const rows = document.querySelectorAll('tr');

const headerCells = document.querySelectorAll('thead th');
const secondHeaderCopy = headerCells[1].textContent;

const newHeaderCell = document.createElement('th');

newHeaderCell.textContent = secondHeaderCopy;

const lastHeaderCell = headerCells[headerCells.length - 1];

lastHeaderCell.insertAdjacentElement('beforebegin', newHeaderCell);

rows.forEach((row, index) => {
  if (index === 0 || index === rows.length - 1) {
    return;
  }

  const secondRow = row.querySelectorAll('td')[1];
  const copy = secondRow.textContent;

  const newTd = document.createElement('td');

  newTd.textContent = copy;

  const lastTd =
    row.querySelectorAll('td')[row.querySelectorAll('td').length - 1];

  row.insertBefore(newTd, lastTd);
});

const footerCells = document.querySelectorAll('tfoot th');
const secondFooterCopy = footerCells[1].textContent;

const newFooterCell = document.createElement('th');

newFooterCell.textContent = secondFooterCopy;

const lastFooterCell = footerCells[footerCells.length - 1];

lastFooterCell.insertAdjacentElement('beforebegin', newFooterCell);
