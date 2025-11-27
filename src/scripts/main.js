'use strict';

function cloneColumnBeforeLast(table, fromIndex) {
  const sections = ['thead', 'tbody', 'tfoot'];

  sections.forEach((section) => {
    const part = table.querySelector(section);

    if (!part) {
      return;
    }

    for (const row of part.rows) {
      const cells = row.cells;
      const source = cells[fromIndex];

      if (!source || cells.length === 0) {
        continue;
      }

      const clone = source.cloneNode(true);

      const lastIndex = cells.length - 1;
      const lastCell = cells[lastIndex];

      row.insertBefore(clone, lastCell);
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');

  if (!table) {
    return;
  }

  cloneColumnBeforeLast(table, 1);
});
