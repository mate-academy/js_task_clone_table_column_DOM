'use strict';

// write your code here
// scripts/main.js

// 1) Знаходимо першу таблицю на сторінці
const table = document.querySelector('table');

// Якщо таблиці немає — зупиняємось (без помилки)

// 2) Перебираємо всі рядки таблиці (включно з thead/tbody/tfoot)
if (table) {
  for (const row of table.rows) {
    // row.cells — це "масивоподібний об'єкт" з комірок (td або th)
    const cells = row.cells;

    // 3) Перевірка: чи є в цьому рядку щонайменше 2 комірки?
    //    Іноді в заголовку або через colspan їх може бути менше.
    if (cells.length < 2) {
      // пропускаємо рядки, де немає другої комірки
      continue;
    }

    // 4) Беремо другий стовпець (індекс 1) і клонуємо його разом з вмістом
    const clone = cells[1].cloneNode(true); // true ->
    // копіює всередині(текст, теги)

    // 5) Вставляємо клон перед останньою коміркою
    //  Якщо, наприклад, cells.length === 5,
    // то cells[cells.length - 1] -> остання
    //    insertBefore вставляє clone перед referenceNode
    row.insertBefore(clone, cells[cells.length - 1]);
  }
}
