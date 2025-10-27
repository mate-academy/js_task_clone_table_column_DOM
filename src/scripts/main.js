'use strict';

const table = document.querySelector('table');

// do for loop, and for each iteration transfer to befor end

// const td = table.rows[0].cells[1];
// const beforEnd = table.rows[0].cells[3];
for (let i = 0; i < table.rows.length; i++) {
  const cloned = table.rows[i].cells[1].cloneNode(true);
  const lengthRow = table.rows[i].cells.length;

  table.rows[i].insertBefore(cloned, table.rows[i].cells[lengthRow - 1]);
}
