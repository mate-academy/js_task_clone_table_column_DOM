'use strict';

/**
 * Функція для копіювання другого стовпця та вставки його перед останнім
 */
function cloneTableColumn() {
  // 1. Отримуємо всі рядки таблиці (і в thead, і в tbody)
  const rows = document.querySelectorAll('tr');

  rows.forEach((row) => {
    // 2. Отримуємо всі клітинки поточного рядка (th або td)
    const cells = row.cells;

    // Перевіряємо, чи в рядку достатньо клітинок для маніпуляцій
    if (cells.length < 2) {
      return;
    }

    // 3. Клонуємо другу клітинку (індекс 1)
    // true означає глибоке клонування (разом із текстом всередині)
    const secondCellClone = cells[1].cloneNode(true);

    // 4. Знаходимо останню клітинку рядка
    const lastCell = cells[cells.length - 1];

    // 5. Вставляємо клоновану клітинку ПЕРЕД останньою
    row.insertBefore(secondCellClone, lastCell);
  });
}

// Викликаємо функцію
cloneTableColumn();
