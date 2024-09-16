'use strict';

const table = document.querySelector(`table`);
const tr = document.querySelectorAll(`tr`);

function toAddColumn(copiedCol, pasteBeforeCol) {
  let count = 0;

  for (const el of tr) {
    const copy = table.rows[count].cells[copiedCol].cloneNode(true);

    el.insertBefore(copy, table.rows[count].cells[pasteBeforeCol]);
    count++;
  }
}

toAddColumn(1, 4);
