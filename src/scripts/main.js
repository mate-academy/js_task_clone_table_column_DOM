'use strict';

const table = document.querySelector('table');
const tableArray = [...table.rows];

for (let i = 0; i < tableArray.length; i++) {
  const add = table.rows[i].cells[1];

  table.rows[i].append(add.cloneNode(true));

  table.rows[i].append(table.rows[i].cells[4]);
}
