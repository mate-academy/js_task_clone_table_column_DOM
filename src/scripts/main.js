'use strict';

const table = document.querySelector('table');
const tableRows = [...table.rows];

const positionIndex = 1;
const copyPosition = [];

tableRows.forEach(element => {
  copyPosition.push(element.cells[positionIndex].cloneNode(true));
});

tableRows.forEach((element, index, array) => {
  element.insertBefore(copyPosition[index], element.cells[4]);
});
