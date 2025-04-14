'use strict';

const table = document.querySelector('table');

if (table) {
  for (const row of table.rows) {
    const cells = row.cells;

    if (cells.length < 2) {
      continue;
    } // переконаймося, що є що клонувати

    // Клонуємо другу клітинку (індекс 1)
    const clonedCell = cells[1].cloneNode(true);

    // Вставляємо перед останньою клітинкою
    row.insertBefore(clonedCell, cells[cells.length - 1]);
  }
}
