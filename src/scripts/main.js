'use strict';

const table = document.querySelector('table');

for (let i = 0; i < table.rows.length; i++) {
  table.rows[i].cells[4].before(table.rows[i].cells[1].cloneNode(true));
}

