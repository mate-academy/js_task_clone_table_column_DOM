'use strict';

const table = document.querySelector('table');
const thead = table.querySelector('thead');
const tbody = table.querySelector('tbody');

const headerRow = thead.querySelector('tr');
const headerCells = headerRow.querySelectorAll('th');

const clonedHeaderCell = headerCells[1].cloneNode(true);

headerRow.insertBefore(
  clonedHeaderCell,
  headerCells[headerCells.length - 1].nextSibling,
);

const bodyRows = tbody.querySelectorAll('tr');

bodyRows.forEach((row) => {
  const cells = row.querySelectorAll('td');

  const clonedCell = cells[1].cloneNode(true);

  row.insertBefore(clonedCell, cells[cells.length - 1].nextSibling);
});
