'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');

  if (!table) {
    return;
  }

  const sections = ['thead', 'tbody', 'tfoot'];

  sections.forEach((sectionName) => {
    const section = table.querySelector(sectionName);

    if (!section) {
      return;
    }

    for (const row of section.rows) {
      const cellToClone = row.cells[1];

      if (!cellToClone) {
        continue;
      }

      const clone = cellToClone.cloneNode(true);

      const insertIndex = row.cells.length - 1;

      row.insertBefore(clone, row.cells[insertIndex]);
    }
  });
});
