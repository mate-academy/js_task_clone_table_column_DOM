'use strict';

const table = document.querySelector('table');

function insertColumn(table_) {
  const [...rowCollection] = table_.rows;

  rowCollection.forEach((element) => {
    const cellToMove = element.cells[1];
    const cellToInserBefore = element.lastElementChild;

    cellToInserBefore.before(cellToMove.cloneNode(true));
  });
}

insertColumn(table);
