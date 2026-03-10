'use strict';

// #1
// const columnToMove = document.querySelectorAll('table tr > :nth-child(2)');
// const columnToPutTargetAfter = document
//   .querySelectorAll('table tr > :nth-child(4)');

// for (let i = 0; i < columnToMove.length; i++) {
//   columnToPutTargetAfter[i].insertAdjacentElement(
//     'afterend',
//     columnToMove[i].cloneNode(true)
//   );
// }

// #2
const CURRENT_POSITION = 1;
const TARGET_POSITION = -2;

const table = document.querySelector('table');

for (const row of table.rows) {
  row.cells[row.cells.length + TARGET_POSITION].insertAdjacentElement(
    'afterend',
    row.cells[CURRENT_POSITION].cloneNode(true),
  );
}
