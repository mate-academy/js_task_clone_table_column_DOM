'use strict';

const table = document.querySelector('table');
const tableChild = table.children;

for (let i = 0; i < tableChild.length; i++) {
  copyColumn(2, 4, tableChild[i]);
};

function copyColumn(columnToCopy, toPasteAfter, tPart) {
  const copyIndex = columnToCopy - 1;

  for (let i = 0; i < tPart.children.length; i++) {
    const newCell = tPart.rows[i].cells[copyIndex];

    tPart.rows[i]
      .insertBefore(newCell.cloneNode(true),
        tPart.rows[i].children[toPasteAfter]);
  };
};
