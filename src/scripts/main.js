'use strict';

const table = document.querySelector('table');

for (let i = 0; i < table.rows.length; i++) {
  const td = table.rows[i].cells[1];
  const tdCopy = document.createElement('td');
  const lastTd = table.rows[i].cells[table.rows[i].cells.length - 1];

  tdCopy.innerHTML = td.innerHTML;

  table.rows[i].insertBefore(tdCopy, lastTd);
}
