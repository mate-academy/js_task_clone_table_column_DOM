'use strict';

const table = document.querySelector('table');

const th = document.createElement('th');

th.textContent = table.tHead.rows[0].cells[1].textContent;
table.tHead.rows[0].cells[3].after(th);
table.tFoot.rows[0].cells[3].after(th.cloneNode(true));

for (const tr of table.tBodies[0].rows) {
  const td = document.createElement('td');

  td.textContent = tr.cells[1].textContent;
  tr.cells[3].after(td);
}
