'use strict';

const table = document.querySelector('table');
const tableRows = [...table.rows];

const positionIndex = 1;

tableRows.forEach(element => {
  element.insertBefore(element.cells[positionIndex].cloneNode(true),
    element.cells[4]);
});
