'use strict';

const table = document.querySelector('table');

for (const row of table.rows) {
  const [ , position,,, salary ] = row.cells;

  salary.before(position.cloneNode(true));
}
