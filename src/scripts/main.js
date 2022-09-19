'use strict';

// write your code here
const table = document.querySelector('table');

for (let i = 0; i < table.rows.length; i++) {
  const repitedRow = table.rows[i].cells[1].cloneNode(true);

  table.rows[i].children[3].after(repitedRow);
}
