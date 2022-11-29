'use strict';

const tableRows = document.querySelectorAll('tr');

makeColumnClone(1, 4, tableRows);

function makeColumnClone(columnNumberOriginal, columnNumberClone, rows) {
  rows.forEach(row => {
    const clonePositionItem = row.children[columnNumberOriginal]
      .cloneNode(true);

    row.children[columnNumberClone - 1].after(clonePositionItem);
  });
}
