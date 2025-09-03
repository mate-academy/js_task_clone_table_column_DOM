'use strict';

const allTr = document.querySelectorAll('table tr');

allTr.forEach((tr) => {
  const secondCellClone = tr.cells[1].cloneNode(true);
  const lastCell = tr.lastElementChild;

  tr.insertBefore(secondCellClone, lastCell);
});
