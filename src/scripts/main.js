'use strict';

const table = document.querySelector('table');
const rows = table.rows;
const columnToCut = rows[0].children.length - 1;
const columnPosition = 1;

for (const row of rows) {
  const positionToInsert = row.children[columnPosition].cloneNode(true);

  row.children[columnToCut].before(positionToInsert);
}
