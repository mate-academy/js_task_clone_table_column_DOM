'use strict';

const rows = document.querySelector('table').rows;

for (let i = 0; i < rows.length; i++) {
  const newCell = rows[i].cells[1].cloneNode(true);

  rows[i].cells[4].before(newCell);
}
