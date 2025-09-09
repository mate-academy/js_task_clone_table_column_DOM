'use strict';

function copyColumn(table, sourceIndex) {
  if (!(table instanceof HTMLTableElement)) {
    return;
  }

  const sections = [table.tHead, table.tBodies[0], table.tFoot].filter(Boolean);

  sections.forEach((section) => {
    Array.from(section.rows).forEach((row) => {
      const cells = Array.from(row.cells);

      if (sourceIndex >= cells.length) {
        return;
      }

      const sourceCell = cells[sourceIndex];
      const clone = sourceCell.cloneNode(true);

      // вставляем перед последней ячейкой
      const lastCell = row.cells[row.cells.length - 1];

      row.insertBefore(clone, lastCell);
    });
  });
}

// Применяем к таблице на странице
const table1 = document.querySelector('table');

copyColumn(table1, 1);
