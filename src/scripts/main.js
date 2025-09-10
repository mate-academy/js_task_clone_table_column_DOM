'use strict';

const table = document.querySelector('table');

for (const row of table.rows) {
  // клон другої клітинки
  const clone = row.cells[1].cloneNode(true);

  // вставляємо перед останньою
  row.insertBefore(clone, row.cells[row.cells.length - 1]);
}
