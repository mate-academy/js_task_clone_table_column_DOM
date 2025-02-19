'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');

  function cloneColumn(index) {
    const sections = ['thead', 'tbody', 'tfoot'];

    sections.forEach((section) => {
      const tableSection = table.querySelector(section);

      if (!tableSection) {
        return;
      }

      for (const row of tableSection.rows) {
        const cells = row.cells;

        if (cells.length <= index) {
          continue;
        }

        const clonedCell = cells[index].cloneNode(true);
        const lastCell = cells[cells.length - 1];

        row.insertBefore(clonedCell, lastCell);
      }
    });
  }

  cloneColumn(1);
});
