'use strict';
// write your code here

// Отримуємо таблицю

const table = document.querySelector('table');

// Отримуємо всі рядки в таблиці (включаючи шапку)

const rows = table.querySelectorAll('tr');

rows.forEach((row) => {
  // Отримуємо другу колонку (індекс 1)
  const secondColumm = row.children[1].cloneNode(true);

  // Вставляємо клону стовпа перед останнім
  row.insertBefore(secondColumm, row.lastElementChild);
});
