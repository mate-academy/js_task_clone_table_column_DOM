'use strict';

// write your code here

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
const table = document.querySelector('table');

for (const row of table.rows) {
  row.cells[row.cells.length - 2].insertAdjacentElement(
    'afterend',
    row.cells[1].cloneNode(true),
  );
}
