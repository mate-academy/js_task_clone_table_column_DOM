'use strict';

const table = document.querySelector('table');
const rows = document.querySelectorAll('tr');

for (let i = 0; i < rows.length; i++) {
  const clonedColumn = table.rows[i].cells[1].cloneNode(true);
  const lastElementIndex = table.rows[i].cells.length - 1;

  table.rows[i].cells[lastElementIndex].before(clonedColumn);
}
