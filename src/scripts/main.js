'use strict';

const tableRows = document.querySelectorAll('tr');

tableRows.forEach((elem) => {
  const newElem = elem.cells[1].cloneNode(true);
  const cellsAmount = elem.cells.length;

  elem.cells[cellsAmount - 1].before(newElem);
});
