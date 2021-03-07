'use strict';

const table = document.querySelector('table');

for (const human of table.rows) {
  const position = human.cells[1].cloneNode(true);

  human.lastElementChild.before(position);
}
