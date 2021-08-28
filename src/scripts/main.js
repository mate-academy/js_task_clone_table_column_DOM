'use strict';

// write your code here
const table = document.querySelector('table');

for (let i = 0; i < table.rows.length; i++) {
  table.rows[i].children[4].before(table.rows[i].cells[1].cloneNode(true));
}
