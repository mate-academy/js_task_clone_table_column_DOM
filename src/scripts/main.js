'use strict';

const allRows = document.querySelectorAll('tr');

for (const currRow of allRows) {
  const currCellsCollect = currRow.cells;

  const positionCell = currCellsCollect[1];

  const salaryCell = currCellsCollect[4];

  const thElements = currRow.querySelectorAll('th');

  if (thElements.length > 0) {
    const thAdd = document.createElement('th');

    thAdd.innerHTML = positionCell.innerHTML;
    currRow.append(thAdd);
    currRow.insertBefore(thAdd, salaryCell);
  } else {
    const tdAdd = document.createElement('td');

    tdAdd.innerHTML = positionCell.innerHTML;
    currRow.append(tdAdd);
    currRow.insertBefore(tdAdd, salaryCell);
  }
}
