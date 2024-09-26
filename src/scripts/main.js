'use strict';

const table = document.querySelector('table');
const placedElementIndex = 1;
const specifiedLocationIndex = 4;
const tableRows = [...table.rows];

tableRows.forEach(element => {
  const clonedElement = element.cells[placedElementIndex].cloneNode(true);

  element.insertBefore(clonedElement, element.cells[specifiedLocationIndex]);
});
