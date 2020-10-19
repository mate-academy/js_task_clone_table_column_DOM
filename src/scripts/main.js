'use strict';

const table = document.querySelector('table');

const indexToCopy = 1;
const indexToInsert = table.rows[indexToCopy].cells.length - 1;

for (let i = 0; i < table.rows.length; i++) {
  const itemToCopy = table.rows[i].cells[indexToCopy];
  const positionToInsert = table.rows[i].cells[indexToInsert];

  table.rows[i].insertBefore(itemToCopy.cloneNode(true), positionToInsert);
}
