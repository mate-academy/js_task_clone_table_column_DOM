'use strict';

const makeCloneAndInsert = (row, fromCell, toCell) => {
  return row.insertBefore(
    row.children[fromCell].cloneNode(true), row.children[toCell]
  );
};

const topRow = document.querySelector('thead').children[0];
const bottomRow = document.querySelector('tfoot').children[0];

makeCloneAndInsert(topRow, 1, 4);
makeCloneAndInsert(bottomRow, 1, 4);

for (const currentRow of document.querySelector('tbody').children) {
  makeCloneAndInsert(currentRow, 1, 4);
}
