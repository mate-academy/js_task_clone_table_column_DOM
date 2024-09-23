'use strict';

const rows = document.querySelectorAll('tbody tr');

rows.forEach((row) => {
  const cells = row.querySelectorAll('td');
  const secondCell = cells[1];
  const newCell = document.createElement('td');

  newCell.textContent = secondCell.textContent;

  const lastCells = row.lastElementChild;

  row.insertBefore(newCell, lastCells);
});

const theadRows = document.querySelectorAll('thead tr');

theadRows.forEach((row) => {
  const headerCells = row.querySelectorAll('th');
  const secondHeaderCell = headerCells[1];
  const newHeaderCell = document.createElement('th');

  newHeaderCell.textContent = secondHeaderCell.textContent;

  const lastHeaderCells = row.lastElementChild;

  row.insertBefore(newHeaderCell, lastHeaderCells);
});

const footRows = document.querySelectorAll('tfoot tr');

footRows.forEach((row) => {
  const footCells = row.querySelectorAll('th');
  const secondFootCell = footCells[1];
  const newFootCell = document.createElement('th');

  newFootCell.textContent = secondFootCell.textContent;

  const lastFootCells = row.lastElementChild;

  row.insertBefore(newFootCell, lastFootCells);
});
