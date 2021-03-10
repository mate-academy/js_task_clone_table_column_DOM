'use strict';

const table = document.querySelector('table');

const cloneFrom = 1;
const cloneInto = 4;

for (const human of table.rows) {
  const position = human.cells[cloneFrom].cloneNode(true);

  human.cells[cloneInto].before(position);
}
