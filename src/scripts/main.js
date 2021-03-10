'use strict';

function copyColumnFromTo(numberOfCopiedColumn, newPositionOfCopiedColumn) {
  const table = document.querySelector('table');

  for (let i = 0; i < table.rows['length']; i++) {
    const copiedCol = table.rows[i].cells[numberOfCopiedColumn].cloneNode(true);

    table.rows[i].cells[newPositionOfCopiedColumn].before(
      copiedCol
    );
  }
}

copyColumnFromTo(1, 4);
