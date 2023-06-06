'use strict';

const table = document.querySelector('table');

for (let i = 0; i < table.rows.length; ++i) {
  const columbSecond = table.rows[i].cells[1];
  const newColum = columbSecond.cloneNode(true);
  const index = table.rows[i].cells.length - 1;

  table.rows[i].cells[index].before(newColum);
}
