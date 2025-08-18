'use strict';

// write your code here
const table = document.querySelector('table');
const rows = Array.from(table.rows);

rows.forEach((row) => {
  const copiedEl = row.cells[1].outerHTML;
  const lastEl = row.lastElementChild;

  lastEl.insertAdjacentHTML('beforebegin', copiedEl);
});
