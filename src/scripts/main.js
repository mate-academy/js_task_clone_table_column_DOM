'use strict';

const tableEl = document.querySelector('table');

function cloneTableColumn(table) {
  if (!table.rows.length) {
    return;
  }

  for (let i = 0; i < table.rows.length; i++) {
    const colClone = table.rows[i].cells[1].cloneNode(true);

    table.rows[i].cells[4].before(colClone);
  }
}

cloneTableColumn(tableEl);
