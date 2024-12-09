'use strict';

// write your code here
const headOfTable = document.querySelector('thead');
const footOfTable = document.querySelector('tfoot');
const bodyOfTable = document.querySelector('tbody');

function cloneRow(section) {
  const rows = Array.from(section.rows);

  rows.forEach((row) => {
    const clonedCell = row.cells[1].cloneNode(true);

    row.insertBefore(clonedCell, row.lastElementChild);
  });
}

cloneRow(headOfTable);
cloneRow(footOfTable);
cloneRow(bodyOfTable);
