'use strict';

const HEADING_INDEX = 1;

function copyColumn(element, index) {
  if (index === -1) {
    return;
  }

  const rows = element.querySelectorAll('tr');
  const colNumber = rows[0].cells.length;

  if (!(rows && colNumber)) {
    return;
  }

  for (const row of rows) {
    const lastElement = row.cells[colNumber - 1];
    const newElement = lastElement.cloneNode(true);

    newElement.textContent = row.cells[index].textContent;

    row.insertBefore(newElement, lastElement);
  }
}

const table = document.querySelector('table');

copyColumn(table, HEADING_INDEX);
