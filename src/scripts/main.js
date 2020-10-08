'use strict';

const table = document.querySelector('table');
const indexToCopy = 1;
const indexToInsert = 4;

for (let i = 0; i < table.rows.length; i++) {
  const itemToCopy = table.rows[i].cells[indexToCopy];

  table.rows[i].cells[indexToInsert].before(itemToCopy.cloneNode(true));
}
