'use strict';

const table = document.querySelector('table');

for (const row of [...table.rows]) {
  const position = (row.parentElement.tagName === 'THEAD'
  || row.parentElement.tagName === 'TFOOT')
    ? document.createElement('th')
    : document.createElement('td');

  position.textContent = row.cells[1].innerHTML;

  row.lastElementChild.before(position);
}
