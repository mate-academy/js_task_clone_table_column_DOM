'use strict';

const table = document.getElementsByTagName('table');

const rowsBody = table[0].tBodies[0].rows;
const rowsHead = table[0].tHead.rows;
const rowsFooter = table[0].tFoot.rows;

const insertAfter = rowsBody[0].cells.length - 2;

cloneColumn(rowsBody, 1, insertAfter);
cloneColumn(rowsHead, 1, insertAfter);
cloneColumn(rowsFooter, 1, insertAfter);

function cloneColumn(rows, cloneIndex, afterPosition) {
  for (const tr of rows) {
    const clone = tr.cells[cloneIndex].cloneNode(true);

    tr.children[afterPosition].after(clone);
  }
}
