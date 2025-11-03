'use strict';

// write your code here
const table = document.querySelector('tbody');
const tableRows = table.rows;

const header = document.querySelector('thead');
const headerCells = header.rows;

const footer = document.querySelector('tfoot');
const footerCells = footer.rows;

for (const row of headerCells) {
  const copyRow = row.cells[1];

  const newHeaderCell = document.createElement('th');

  newHeaderCell.innerHTML = copyRow.textContent;
  row.insertBefore(newHeaderCell, row.cells[4]);
}

for (const row of tableRows) {
  const copyRow = row.cells[1];

  row.insertCell(4).innerHTML = copyRow.textContent;
}

for (const row of footerCells) {
  const copyRow = row.cells[1];

  const newFooterCell = document.createElement('th');

  newFooterCell.innerHTML = copyRow.textContent;
  row.insertBefore(newFooterCell, row.cells[4]);
}
