'use strict';

const table = document.querySelector('table');

function cloneColumn(colIndex) {
  const sections = ['thead', 'tbody', 'tfoot'];

  sections.forEach((sectionName) => {
    const section = table[sectionName];

    if (!section) {
      return;
    }

    for (const row of section.rows) {
      const cells = row.cells;
      const cloned = cells[colIndex].cloneNode(true);

      row.insertBefore(cloned, cells[cells.length - 1]);
    }
  });
}

cloneColumn(1);
