'use strict';

const table = document.querySelector('table');
const tRows = table.rows;

for (let i = 0; i < tRows.length; i++) {
  tRows[i].cells[3].after(tRows[i].cells[1].cloneNode(true));
}
