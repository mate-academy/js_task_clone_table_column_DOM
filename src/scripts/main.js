'use strict';

const table = document.querySelector('table');
const tableRows = table ? table.rows.length : 0;

for (let rowNum = 0; rowNum < tableRows; rowNum++) {
  const clonedCell = table.rows[rowNum].cells[1].cloneNode(true);

  const lastCell = table.rows[rowNum].cells[4];

  lastCell.before(clonedCell);
}

/* 'use strict';

const rows = [...document.querySelectorAll('tr')];

for (const row of rows) {
  const position = row.children[1];
  const clone = position.cloneNode(true);

  row.lastElementChild.before(clone);
}
 */
