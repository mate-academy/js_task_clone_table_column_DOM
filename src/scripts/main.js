'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const table = document.querySelector('table'); // Знаходимо таблицю
  const rows = table.rows; // Отримуємо всі рядки таблиці

  const columnIndexToClone = 1; // Другий стовпець
  const lastColumnIndex = rows[0].cells.length - 1; // Останній стовпець

  for (const row of rows) {
    if (row.cells.length > columnIndexToClone) {
      // Клонуємо комірку другого стовпця
      const clonedCell = row.cells[columnIndexToClone].cloneNode(true);

      // Вставляємо перед останнім стовпцем
      row.insertBefore(clonedCell, row.cells[lastColumnIndex]);
    }
  }
});
