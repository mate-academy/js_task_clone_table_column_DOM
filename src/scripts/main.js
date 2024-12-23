'use strict';

const table = document.querySelector('table');

for (let i = 0; i < table.rows.length; i++) {
  const data = table.rows[i].cells[1];
  let cell = document.createElement('td');

  if (i === 0 || i === table.rows.length - 1) {
    cell = document.createElement('th');
  }

  cell.textContent = data.textContent;
  table.rows[i].cells[4].before(cell);
}
