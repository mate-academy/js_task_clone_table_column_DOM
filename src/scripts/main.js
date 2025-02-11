'use strict';

const table = document.querySelector('table');

const rowLength = table.rows.length;

for (let i = 0; i < rowLength; i++) {
  const td = table.rows[i].cells[1];

  const cloneTd = td.cloneNode(true);

  const lastElement = table.rows[i].cells[4];

  lastElement.before(cloneTd);
}
