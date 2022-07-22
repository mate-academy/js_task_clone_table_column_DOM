'use strict';

const table = document.querySelector('table');

for (let i = 0; i < table.rows.length; i++) {
  const cloneElem = table.rows[i].cells[1].cloneNode(true);

  table.rows[i].children[4].before(cloneElem);
}
