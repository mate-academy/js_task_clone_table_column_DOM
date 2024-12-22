'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const table = document.querySelector('.dashboard');

  if (!table) {
    // eslint-disable-next-line no-console
    console.error('Таблиця з класом "dashboard" не знайдена.');

    return;
  }

  const rows = table.querySelectorAll('tbody tr');

  if (!rows.length) {
    // eslint-disable-next-line no-console
    console.error('Рядки таблиці не знайдені.');

    return;
  }

  rows.forEach((row) => {
    const secondColumn = row.cells[1];

    if (!secondColumn) {
      // eslint-disable-next-line no-console
      console.error('Друга клітинка в рядку не знайдена.');

      return;
    }

    const clonedColumn = secondColumn.cloneNode(true);

    row.inserBefore(clonedColumn, row.cells[row.cells.length - 1]);
  });
});
