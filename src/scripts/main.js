'use strict';

const table = document.querySelector('table');
const rows = document.querySelectorAll('tr');

for (let i = 0; i < rows.length; i++) {
  const position = table.rows[i].cells[1];

  rows[i].children[4].before(position.cloneNode(true));
}
