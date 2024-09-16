'use strict';

const table = document.querySelector('table');

for (let i = 0; i < table.rows.length; i++) {
  const newColumnCell = (table.rows[i].cells[1]).cloneNode(true);

  table.rows[i].lastElementChild.before(newColumnCell);
}
