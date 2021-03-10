'use strict';

const table = document.querySelector('table');
const tableRows = [...table.rows];

const placedCloneFrom = 1;
const placedLocationTo = 4;

tableRows.forEach(element => {
  const tableElementClone = element.cells[placedCloneFrom].cloneNode(true);

  element.insertBefore(tableElementClone,
    element.cells[placedLocationTo]);
});
