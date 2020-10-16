'use strict';

const table = document.querySelector('table');
const indexToCopy = 1;
const indexToInsert = 4;

for (const { cells } of table.rows) {
  const copyElement = cells[indexToCopy];

  cells[indexToInsert].before(copyElement.cloneNode(true));
};
