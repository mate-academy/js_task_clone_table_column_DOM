'use strict';

// const newHeaderPart = document
//   .querySelector('thead:nth-cild(2)')
//   .cloneNode(true);
// const newFooterPart = document
//   .querySelector('tfoot:nth-cild(2)')
//   .cloneNode(true);
const headerRow = document.querySelector('thead tr');
const footerRow = document.querySelector('tfoot tr');
const bodyRows = document.querySelectorAll('tbody tr');

const allRows = [headerRow, ...bodyRows, footerRow];

allRows.forEach((row) => {
  const isRowHeaderOrFooter = row.querySelectorAll('th').length > 0;

  const cells = isRowHeaderOrFooter
    ? row.querySelectorAll('th')
    : row.querySelectorAll('td');

  const newCell = isRowHeaderOrFooter
    ? document.createElement('th')
    : document.createElement('td');

  newCell.textContent = cells[1].textContent;

  row.insertBefore(newCell, cells[cells.length - 1]);
});
