'use strict';

const makeCloneAndInsert = (row, fromCell, toCell) => {
  return row.insertBefore(
    row.children[fromCell].cloneNode(true), row.children[toCell]
  );
};

const table = document.querySelector('table');
const topRow = table.tHead.rows[0];
const bottomRow = table.tFoot.rows[0];
const copyFromIndex = 1;
const copyToIndex = 4;

makeCloneAndInsert(topRow, copyFromIndex, copyToIndex);
makeCloneAndInsert(bottomRow, copyFromIndex, copyToIndex);

for (const currentRow of table.tBodies[0].rows) {
  makeCloneAndInsert(currentRow, copyFromIndex, copyToIndex);
}
