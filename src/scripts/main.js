'use strict';

const table = document.querySelector('table');
const secondColumnIndex = 1;
const beforeColumnIndex = 4;

const thead = table.querySelector('thead');
const headerCell = thead.rows[0].cells[secondColumnIndex].cloneNode(true);

thead.rows[0].insertBefore(headerCell, thead.rows[0].cells[beforeColumnIndex]);

const tbody = table.querySelector('tbody');

for (let i = 0; i < tbody.rows.length; i++) {
  const cell = tbody.rows[i].cells[secondColumnIndex].cloneNode(true);

  tbody.rows[i].insertBefore(cell, tbody.rows[i].cells[beforeColumnIndex]);
}

const tfoot = table.querySelector('tfoot');

if (tfoot) {
  const footCell = tfoot.rows[0].cells[secondColumnIndex].cloneNode(true);

  tfoot.rows[0].insertBefore(footCell, tfoot.rows[0].cells[beforeColumnIndex]);
}
