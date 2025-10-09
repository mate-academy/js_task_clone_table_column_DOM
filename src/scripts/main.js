'use strict';

const table = document.querySelector('table');

cloneColumnBeforeLast(table, 1);

function cloneColumnBeforeLast(tableEl, fromIndex = 1) {
  if (!tableEl || tableEl.tagName !== 'TABLE') {
    return;
  }

  insertIntoSection(tableEl.querySelector('thead'), fromIndex);
  insertIntoSection(tableEl.querySelector('tbody'), fromIndex, true);
  insertIntoSection(tableEl.querySelector('tfoot'), fromIndex);
}

function insertIntoSection(sectionEl, fromIndex, isBody = false) {
  if (!sectionEl) {
    return;
  }

  if (!isBody) {
    const tr = sectionEl.rows?.[0];

    if (!tr || tr.cells.length <= fromIndex) {
      return;
    }

    const clone = tr.cells[fromIndex].cloneNode(true);

    const beforeElem = tr.cells[tr.cells.length - 1] ?? null;

    tr.insertBefore(clone, beforeElem);

    return;
  }

  const rows = sectionEl.rows;

  if (!rows?.length) {
    return;
  }

  for (const row of rows) {
    if (row.cells.length <= fromIndex) {
      return;
    }
  }

  const clones = [];

  for (const row of rows) {
    clones.push(row.cells[fromIndex].cloneNode(true));
  }

  let i = 0;

  for (const row of rows) {
    const beforeElem = row.cells[row.cells.length - 1] ?? null;

    row.insertBefore(clones[i++], beforeElem);
  }
}
