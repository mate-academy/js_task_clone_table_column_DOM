'use strict';

const table = document.querySelector('table');

for (let i = 0; i < table.rows.length; i++) {
  const clone = table.rows[i].cells[1].cloneNode(true);
  const lastElementIndex = table.rows[i].cells.length - 1;

  table.rows[i].cells[lastElementIndex].before(clone);
}
