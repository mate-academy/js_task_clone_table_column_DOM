'use strict';

'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');

  if (!table) {
    return;
  } // якщо таблиці немає — виходимо

  for (const row of table.rows) {
    // перевіряємо, що є хоча б 2 клітинки
    if (row.cells.length < 2) {
      continue;
    }

    // клон другої клітинки
    const clone = row.cells[1].cloneNode(true);

    // визначаємо останню клітинку
    const beforeNode = row.cells[row.cells.length - 1];

    // вставляємо клон перед останньою клітинкою
    row.insertBefore(clone, beforeNode);
  }
});
