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

let counter = 0;
const bodyRowsAmount = document.querySelector('tbody').children.length;

while (counter < bodyRowsAmount) {
  const currentRow = document.querySelector('tbody').children[counter];

  makeCloneAndInsert(currentRow, 1, 4);
  counter++;
}
