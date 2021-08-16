'use strict';

const table = document.querySelector('table');

table.tHead.rows[0].lastElementChild
  .before(table.tHead.rows[0].cells[1].cloneNode(true));

for (let i = 1; i < table.rows.length - 1; i++) {
  table.rows[i].lastElementChild.before(table.rows[i].cells[1].cloneNode(true));
}

table.tFoot.rows[0].lastElementChild
  .before(table.tFoot.rows[0].cells[1].cloneNode(true));
