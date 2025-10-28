'use strict';

const table = document.querySelector('table');

function extendNonBodyBlock(block) {
  if (!block) {
    return;
  }

  Array.from(block.rows).forEach((row) => {
    const clone = row.cells[1].cloneNode(true);
    const targetCell = row.cells[row.cells.length - 2];

    targetCell.after(clone);
  });
}

[table.tHead, table.tFoot, ...table.tBodies].forEach((block) => {
  extendNonBodyBlock(block);
});
