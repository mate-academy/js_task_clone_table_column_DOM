'use strict';

// write your code here
// Знаходимо таблицю
const tbl = document.querySelector('table');

// Перевірка, що таблиця існує, перш ніж щось робити
if (tbl) {
  cloneColumn(tbl, 1); // клонуємо другу колонку (індекс 1)
}

/**
 * Клонує вказану колонку і вставляє її перед останньою
 * @param {HTMLTableElement} tableElement - таблиця
 * @param {number} colIndexToClone - індекс колонки для клонування (0-based)
 */
function cloneColumn(tableElement, colIndexToClone) {
  // Перевірка, що передано коректний елемент таблиці
  if (!tableElement) {
    return;
  }

  // Опрацьовуємо всі три секції таблиці
  ['thead', 'tbody', 'tfoot'].forEach((sectionName) => {
    const section = tableElement.querySelector(sectionName);

    if (!section) {
      return;
    }

    section.querySelectorAll('tr').forEach((row) => {
      // Беремо snapshot комірок (щоб live-колекція не мінялася під час вставки)
      const cells = Array.from(row.cells);

      if (cells.length === 0) {
        return;
      }

      const sourceCell = cells[colIndexToClone];

      if (!sourceCell) {
        return;
      } // якщо у рядку менше колонок

      // Клонуємо клітинку (включно з усім її вмістом)
      const clonedCell = sourceCell.cloneNode(true);

      // Визначаємо, куди вставляти (перед останньою клітинкою або в кінець)
      const refNode = cells[cells.length - 1] || null;

      // Вставляємо копію перед останньою клітинкою (або додаємо в кінець)
      row.insertBefore(clonedCell, refNode);
    });
  });
}
