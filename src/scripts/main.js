'use strict';

const rows = document.querySelector('table').rows;

for (const row of rows) {
  const cell = row.children[1].cloneNode(true);

  row.children[4].before(cell);
}
