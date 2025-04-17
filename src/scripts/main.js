'use strict';

const HEADING_INDEX = 1;
const table = document.querySelector('table');

function copyCell(element, index) {
  if (index === -1) {
    return;
  }

  const rows = element.querySelectorAll('tr');
  const coloms = rows[0].cells.length;

  if (!(rows && coloms)) {
    return;
  }

  for (const row of rows) {
    const lastElement = row.cells[coloms - 1];
    const newElement = lastElement.cloneNode(true);

    newElement.textContent = row.cells[index].textContent;

    row.insertBefore(newElement, lastElement);
  }
}

copyCell(table, HEADING_INDEX);
