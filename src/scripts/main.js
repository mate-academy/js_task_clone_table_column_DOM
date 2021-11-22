'use strict';

/* Main solution */

const table = document.querySelector('table');
const rows = table.rows;

for (const row of rows) {
  const cloned = row.cells[1].cloneNode(true);

  row.insertBefore(cloned, row.children[4]);
}

/* Alternative solution */
/*
const rows = document.querySelectorAll('tr');

[...rows].forEach(el => {
  const cloned = [...el.children][1].cloneNode(true);

  el.children[4].before(cloned);
});
 */
