'use strict';

const rows = document.querySelectorAll('tr');

rows.forEach((row) => {
  const clonedCell = document.createElement('td');
  const clonedCellHead = document.createElement('th');
  const cells = row.children;

  clonedCell.textContent = cells[1].textContent;
  clonedCellHead.textContent = cells[1].textContent;

  if (cells[0].tagName === 'TH') {
    row.insertBefore(clonedCellHead, cells[cells.length - 1]);
  } else {
    row.insertBefore(clonedCell, cells[cells.length - 1]);
  }
});
