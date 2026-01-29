'use strict';

// Знаходимо таблицю
const table = document.querySelector('table');

// Функція для клонування 2-ї колонки в заданій секції таблиці
function cloneSecondColumn(section) {
  if (!section) {
    return;
  }

  // Беремо всі рядки секції
  const rows = section.querySelectorAll('tr');

  rows.forEach((row) => {
    const cells = row.children;

    // Перевірка, що в рядку достатньо клітинок
    if (cells.length < 2) {
      return;
    }

    // Клонуємо другу клітинку
    const secondCellClone = cells[1].cloneNode(true);

    // Вставляємо її перед останньою клітинкою
    row.insertBefore(secondCellClone, cells[cells.length - 1]);
  });
}

// Клонуємо колонку в усіх частинах таблиці
cloneSecondColumn(table.tHead);
cloneSecondColumn(table.tBodies[0]);
cloneSecondColumn(table.tFoot);
