'use strict';

const table = document.querySelector('table');

for (let i = 0; i < table.rows.length; ++i) {
  const columnSecond = table.rows[i].cells[1];
  const newColumn = columnSecond.cloneNode(true);
  const index = table.rows[i].cells.length - 1;

  table.rows[i].cells[index].before(newColumn);
}
