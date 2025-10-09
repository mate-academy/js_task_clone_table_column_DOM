'use strict';

const table = document.querySelector('table');

cloneColumnBeforeLast(table, 1);

function cloneColumnBeforeLast(tableEl, fromIndex = 1) {
  if (!tableEl || tableEl.tagName !== 'TABLE') {
    return;
  }

  insertIntoSection(tableEl.querySelector('thead'), fromIndex);
  insertIntoSection(tableEl.querySelector('tbody'), fromIndex);
  insertIntoSection(tableEl.querySelector('tfoot'), fromIndex);
}

function insertIntoSection(sectionEl, fromIndex) {
  if (!sectionEl) {
    return;
  }

  const rows = sectionEl.rows;

  if (!rows?.length) {
    return;
  }

  for (const row of rows) {
    if (row.cells.length <= fromIndex) {
      continue;
    }

    const clone = row.cells[fromIndex].cloneNode(true);
    const beforeEl = row.cells[row.cells.length - 1] ?? null;

    row.insertBefore(clone, beforeEl);
  }
}
