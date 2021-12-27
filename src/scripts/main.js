'use strict';

const lines = document.querySelectorAll('tr');

for (let i = 0; i < lines.length; i++) {
  const lineCells = lines[i];
  const cellsValues = lines[i].cells;
  const extraCell = document.createElement('td');
  const extraCellBold = document.createElement('th');

  if (i > 0 && i < lines.length - 1) {
    lineCells.append(extraCell);
    extraCell.textContent = cellsValues[4].textContent;
  } else {
    lineCells.append(extraCellBold);
    extraCellBold.textContent = cellsValues[4].textContent;
  }

  cellsValues[4].textContent = cellsValues[1].textContent;
}
