'use strict';

const table = document.querySelector('table');

const indexToCopy = 1;
const indexToInsert = 4;

for (let i = 0; i < table.rows.length; i++) {
  const cellToCopy = table.rows[i].children[indexToCopy];

  table.rows[i].children[indexToInsert].before(cellToCopy.cloneNode(true));
}
