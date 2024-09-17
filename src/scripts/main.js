'use strict';

const table = document.querySelector('table');

for (let i = 0; i < table.rows.length; i++) {
  const cell = table.rows[i].cells[1].outerHTML;

  table.rows[i].insertAdjacentHTML('beforeend', cell);

  table.rows[i].cells[4].before(table.rows[i].cells[5]);
}
