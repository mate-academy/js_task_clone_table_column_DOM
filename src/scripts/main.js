'use strict';

const copiedColumnIndex = 1;
const columnToInsertAfterIndex = 3;

document.querySelectorAll('tr').forEach(row => {
  row.cells[columnToInsertAfterIndex]
    .after(row.cells[copiedColumnIndex]
      .cloneNode(true));
});
