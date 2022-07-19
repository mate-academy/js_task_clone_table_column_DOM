'use strict';

const table = document.querySelector('table');
const rowCopy = 2;
const rowPasteAfter = 4;

for (const row of table.rows) {
  row.children[rowPasteAfter - 1]
    .after(row.children[rowCopy - 1].cloneNode(true));
}
