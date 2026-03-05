'use strict';

const table = document.querySelector('table');

// беремо всі секції таблиці
const sections = [table.tHead, table.tBodies[0], table.tFoot];

sections.forEach((section) => {
  // якщо секції немає або в ній немає рядків — пропускаємо
  if (!section || !section.rows.length) {
    return;
  }

  // проходимо по кожному рядку
  for (const row of section.rows) {
    // друга колонка (індекс 1)
    const secondCell = row.cells[1];

    // якщо клітинки немає — пропускаємо
    if (!secondCell) {
      continue;
    }

    // створюємо клон
    const clone = secondCell.cloneNode(true);

    // остання клітинка
    const lastCell = row.cells[row.cells.length - 1];

    // якщо є куди вставляти
    if (lastCell) {
      row.insertBefore(clone, lastCell);
    }
  }
});
