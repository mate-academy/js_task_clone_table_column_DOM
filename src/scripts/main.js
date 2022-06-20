'use strict';

const table = document.querySelector('table');

for (const row of table.rows) {
  const secondRow = row.children[1];

  row.children[3].after(secondRow.cloneNode(true));
}
