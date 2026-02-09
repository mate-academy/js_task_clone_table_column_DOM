'use strict';

const table = document.querySelector('table');

// Індекси стовпців (рахуємо з нуля)
const positionIdx = 1;

// Проходимо крізь усі рядки таблиці
for (const row of table.rows) {
  // 1. Знаходимо клітинку "Position" у поточному рядку
  const positionCell = row.cells[positionIdx];

  // 2. Знаходимо останню клітинку у рядку
  const lastCell = row.cells[row.cells.length - 1];

  if (positionCell && lastCell) {
    // 3. Робимо глибоку копію клітинки (з текстом і стилями)
    const cellCopy = positionCell.cloneNode(true);

    // 4. Вставляємо копію одразу після останньої клітинки
    lastCell.before(cellCopy);
  }
}
