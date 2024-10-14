'use strict';

const table = document.querySelector('table');

// Перевіряємо, чи існує таблиця
if (table) {
  const rows = Array.from(table.rows);

  // Створюємо DocumentFragment для уникнення переробок DOM
  const fragment = document.createDocumentFragment();

  rows.forEach((row) => {
    const secondCell = row.cells[1]; // Отримуємо другу клітинку

    if (secondCell) {
      const clonedCell = secondCell.cloneNode(true); // Клонуємо другу клітинку

      // Вставляємо клон перед останньою клітинкою
      row.insertBefore(clonedCell, row.cells[row.cells.length - 1]);
    }
  });

  // Додаємо змінений фрагмент до таблиці
  table.appendChild(fragment);
}
