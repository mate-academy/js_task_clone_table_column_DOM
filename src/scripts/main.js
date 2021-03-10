'use strict';

const table = document.querySelector('table');
const tableRows = [...table.rows];

const positionIndex = 1;
const locationIndex = 4;

tableRows.forEach(element => {
  const tableElementClone = element.cells[positionIndex].cloneNode(true);

  element.insertBefore(tableElementClone,
    element.cells[locationIndex]);
});
