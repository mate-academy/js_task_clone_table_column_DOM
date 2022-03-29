'use strict';

const table = document.querySelector('table')

for (let i = 0; i < table.rows.length; i++) {
  const clonedCell = table.rows[i].cells[1].cloneNode(true);

  table.rows[i].cells[4].before(clonedCell)
}

// const rows = document.querySelectorAll('tr');

// for (const row of rows) {
//   const clonedCell = row.cells[1].cloneNode(true);

//   row.children[4].before(clonedCell);
// }
