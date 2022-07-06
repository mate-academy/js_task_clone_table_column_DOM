'use strict';

const rows = document.querySelectorAll('tr');
const copiedColumn = 1;
const columnInsertBefore = 4;

for (const row of rows) {
  const secondColumnCopy = row.children[copiedColumn].cloneNode(true);

  row.insertBefore(secondColumnCopy, row.children[columnInsertBefore]);
}
