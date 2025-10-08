'use strict';

// write your code here
// Знаходимо таблицю
const tbl = document.querySelector('table');

// Функція для клонування певної колонки і вставки перед останньою
function cloneColumn(tableElement, colIndexToClone) {
  // Проходимось по всіх секціях таблиці: thead, tbody, tfoot
  ['thead', 'tbody', 'tfoot'].forEach((sectionName) => {
    const section = tableElement.querySelector(sectionName);

    if (!section) {
      return;
    }

    // Проходимо по кожному рядку секції
    section.querySelectorAll('tr').forEach((row) => {
      const cells = row.children;
      // Клонуємо потрібну комірку
      const clonedCell = cells[colIndexToClone].cloneNode(true);

      // Вставляємо перед останньою коміркою
      row.insertBefore(clonedCell, cells[cells.length - 1]);
    });
  });
}

// Клонуємо 2-гу колонку (індекс 1, бо починається з 0)
cloneColumn(tbl, 1);
