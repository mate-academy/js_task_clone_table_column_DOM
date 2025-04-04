'use strict';

const rows = document.querySelectorAll('tr');
const copiedColumn = 1;
const columnInsertBefore = 4;

function copyRow(args) {
  for (const item of args) {
    const copiedRow = item.children[copiedColumn].cloneNode(true);

    item.insertBefore(copiedRow, item.children[columnInsertBefore]);
  }
}

copyRow(rows);
