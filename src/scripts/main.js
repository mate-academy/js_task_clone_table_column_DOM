'use strict';

const rows = [...document.querySelector('table').rows];

for (const row of rows) {
  row.lastElementChild.before(row.cells[1].cloneNode(true));
}
