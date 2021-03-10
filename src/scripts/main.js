'use strict';

const table = document.querySelector('table');
const tableRows = [...table.rows];

const indexCloneFrom = 1;
const indexCLlneTo = 4;

tableRows.forEach(element => {
  const tableElementClone = element.cells[indexCloneFrom].cloneNode(true);

  element.insertBefore(tableElementClone,
    element.cells[indexCLlneTo]);
});
