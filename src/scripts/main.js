'use strict';

const table = document.querySelector('table');
const tableRows = [...table.rows];

const positionIndex = 1;
const copyPosition = [];

tableRows.forEach((element, index, array) => {
  copyPosition.push(element.cells[positionIndex].cloneNode(true));
  element.insertBefore(copyPosition[index], element.cells[4]);
});
