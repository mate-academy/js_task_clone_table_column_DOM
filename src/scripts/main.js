'use strict';

const table = document.querySelector('table');
const property = document.querySelector('thead tr');

const index = [...property.children].findIndex(td =>
  td.innerHTML === 'Position');

for (const human of table.rows) {
  const position = human.cells[index].cloneNode(true);

  human.lastElementChild.before(position);
}
