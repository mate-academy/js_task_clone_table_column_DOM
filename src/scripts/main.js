'use strict';

const allTr = document.getElementsByTagName('tr');

Array.from(allTr).forEach((row) => {
  const allCells = row.querySelectorAll('td, th');

  const lastCell = allCells[allCells.length - 1];

  if (row.querySelector('th')) {
    const newCellHeader = document.createElement('th');

    newCellHeader.textContent = `${allCells[1].textContent}`;

    row.insertBefore(newCellHeader, lastCell);

    return;
  }

  const newCell = document.createElement('td');

  newCell.textContent = `${allCells[1].textContent}`;

  row.insertBefore(newCell, lastCell);
});
