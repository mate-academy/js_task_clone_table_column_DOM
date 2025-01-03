'use strict';

const trArr = document.querySelectorAll('tr');

trArr.forEach((tr) => {
  const cells = tr.querySelectorAll('th, td');

  const clonedCell = cells[1].cloneNode(true);

  const lastCellIndex = cells.length - 1;

  cells[lastCellIndex].before(clonedCell);
});
