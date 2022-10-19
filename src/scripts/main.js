'use strict';

const table = document.querySelector('table');
const tableRows = [...table.rows];

function changeTable() {
  for (let row = 0; row < tableRows.length; row++) {
    const clone = tableRows[row].cells[1].cloneNode(true);

    table.rows[row].cells[3].after(clone);
  }
}

changeTable();
