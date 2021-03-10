'use strict';

const table = document.querySelector('table');
const rows = table.rows;
const placeToInsert = rows[0].children.length - 1;
const clonedColumnPosition = 1;

for (const row of rows) {
  const clonedColumn = row.children[clonedColumnPosition].cloneNode(true);

  row.children[placeToInsert].before(clonedColumn);
}
