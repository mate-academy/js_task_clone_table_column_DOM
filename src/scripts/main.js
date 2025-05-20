'use strict';

const table = document.body.querySelector('table');
const collectionRows = table.rows;

for (let i = 0; i < collectionRows.length; i++) {
  if (collectionRows[i].cells.length >= 2) {
    const col = collectionRows[i].cells[1].cloneNode(true);

    collectionRows[i].lastElementChild.before(col);
  }
}

// for (const row of collectionRows) {
//       const col = row.cells[1].cloneNode(true);

//       row.lastElementChild.before(col);
//     }
