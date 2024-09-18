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

function insertToHeader() {
  const headerCells = headerRow.querySelectorAll('th');
  const newHeaderCell = document.createElement('th');

  newHeaderCell.textContent = headerCells[1].textContent;

  headerRow.insertBefore(newHeaderCell, headerCells[headerCells.length - 1]);
}

function insertToFooter() {
  const footerCells = footerRow.querySelectorAll('th');
  const newFooterCell = document.createElement('th');

  newFooterCell.textContent = footerCells[1].textContent;

  footerRow.insertBefore(newFooterCell, footerCells[footerCells.length - 1]);
}

function insertToBody() {
  bodyRows.forEach((row) => {
    const bodyCells = row.querySelectorAll('td');
    const newBodyCell = document.createElement('td');

    newBodyCell.textContent = bodyCells[1].textContent;
    row.insertBefore(newBodyCell, bodyCells[bodyCells.length - 1]);
  });
}

insertToHeader();
insertToFooter();
insertToBody();
// allRows.forEach((row) => {
//   const isHeaderRow = row.querySelector('th') !== null;
//   const newCell = isHeaderRow
//     ? document.createElement('th')
//     : document.createElement('td');

//   newCell.textContent = 'text content';

//   const cells = isHeaderRow
//     ? row.querySelectorAll('th')
//     : row.querySelector('td');

//   row.insertBefore(newCell, cells[cells.length - 1]);
// });
