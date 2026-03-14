'use strict';

const table = document.querySelector('table');
const DEBUG = true;
const log = (...args) =>
  // eslint-disable-next-line no-console
  DEBUG && console.error(...args, 'is not found');

const elementExists = (el) => !!el;
const cleanStr = (str) => String(str).trim().toLowerCase();

const getIndexColumn = (columnName) => {
  const headerRow = table.querySelector('thead tr');

  if (!headerRow) {
    log('thead tr');

    return -1;
  }

  const headers = Array.from(headerRow.cells);
  const colIndex = headers.findIndex(
    (h) => cleanStr(h.textContent) === cleanStr(columnName),
  );

  if (colIndex === -1) {
    log(columnName);
  }

  return colIndex;
};

const cloneColumnInSection = (section, colIndex) => {
  if (!section) {
    log('arg section');

    return;
  }

  const rows = [...section.rows];

  rows.forEach((row) => {
    const cell = row.cells[colIndex];

    if (!cell) {
      if (DEBUG) {
        // eslint-disable-next-line no-console
        console.warn(`No cell at index ${colIndex} for row ${row.rowIndex}`);
      }

      return;
    }

    const clone = cell.cloneNode(true);

    if (clone.removeAttribute) {
      clone.removeAttribute('id');
    }

    const beforeColumn = row.cells[row.cells.length - 1] || null;

    row.insertBefore(clone, beforeColumn);
  });
};

(() => {
  if (!elementExists(table)) {
    log('table');

    return;
  }

  const columnIndex = getIndexColumn('position');

  if (columnIndex < 0) {
    log('column');

    return;
  }

  const sections = table.querySelectorAll('thead, tbody, tfoot');

  sections.forEach((section) => cloneColumnInSection(section, columnIndex));
})();
