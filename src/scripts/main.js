'use strict';

const rowsTable = document.querySelectorAll('tr');

for (const oneRow of rowsTable) {
  const rowCell = oneRow.children[1].cloneNode(true);

  oneRow.insertBefore(rowCell, oneRow.children[4]);
}
