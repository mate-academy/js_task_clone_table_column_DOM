'use strict';

const table = document.querySelector('table');
const rows = document.querySelectorAll('tr');

for (let i = 0; i < table.rows.length; i++) {
  const cell = table.rows[i].cells[1].cloneNode(true);

  rows[i].children[4].before(cell);
}
