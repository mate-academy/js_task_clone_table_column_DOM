'use strict';

const table = document.querySelector('table');
const tbody = table.querySelector('tbody');
const thead = table.querySelector('thead');
const tfoot = table.querySelector('tfoot');
const rows = tbody.rows;

[...rows].forEach(row => {
  const td = row.querySelectorAll('td')[1];
  const cloneTd = td.cloneNode(true);

  row.insertBefore(cloneTd, row.lastElementChild);
});

const tdHead = thead.rows[0].querySelectorAll('th')[1];
const cloneTdHead = tdHead.cloneNode(true);
thead.rows[0].insertBefore(cloneTdHead, thead.rows[0].lastElementChild);

const tdFoot = tfoot.rows[0].querySelectorAll('th')[1];
const cloneTdFoot = tdFoot.cloneNode(true);
tfoot.rows[0].insertBefore(cloneTdFoot, tfoot.rows[0].lastElementChild);
