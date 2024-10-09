'use strict';

const table = document.body.firstElementChild;
const rows = table.rows;

for (const row of rows) {
  const positionColumnCopy = row.cells[1].cloneNode(true);

  row.lastElementChild.before(positionColumnCopy);
}
