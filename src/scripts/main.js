'use strict';

const table = document.querySelector('table');

// 2. Перевіряємо, чи таблицю знайдено
if (table) {
  // 3. Перебираємо всі рядки таблиці (в thead, tbody, tfoot)
  for (const row of table.rows) {
    // 4. Працюємо тільки з рядками, що мають достатньо комірок (спочатку 5)

    //     але >= 2 достатньо, щоб уникнути помилок з індексами 1 і length-1)
    if (row.cells.length >= 2) {
      // 5. Отримуємо другу і останню комірки
      const secondCell = row.cells[1]; // Комірка для клонування (індекс 1)
      const lastCell = row.cells[row.cells.length - 1];

      // 6. Перевіряємо, чи обидві комірки знайдено
      if (secondCell && lastCell) {
        // 7. Клонуємо другу комірку (глибоке копіювання)
        const clonedCell = secondCell.cloneNode(true);

        // 8. Вставляємо клон перед останньою коміркою в поточному рядку
        row.insertBefore(clonedCell, lastCell);
      }
    }
  }
}
