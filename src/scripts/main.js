'use strict';

const table = document.querySelector('table');

for (let i = 0; i < table.rows.length; i++) {
  const positionColumn = table.rows[i].cells[1];
  const salaryColumn = table.rows[i].cells[4];

  salaryColumn.before(positionColumn.cloneNode(true));
}
