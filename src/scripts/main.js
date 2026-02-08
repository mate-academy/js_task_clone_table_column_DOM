'use strict';

const table = document.querySelector('table');

// Індекси стовпців (рахуємо з нуля)
const positionIdx = 1;
const ageIdx = 3;

// Проходимо крізь усі рядки таблиці
for (const row of table.rows) {
  // 1. Знаходимо клітинку "Position" у поточному рядку
  const positionCell = row.cells[positionIdx];

  // 2. Знаходимо клітинку "Age", після якої будемо вставляти
  const ageCell = row.cells[ageIdx];

  if (positionCell && ageCell) {
    // 3. Робимо глибоку копію клітинки (з текстом і стилями)
    const cellCopy = positionCell.cloneNode(true);

    // 4. Вставляємо копію одразу після клітинки Age
    ageCell.after(cellCopy);
  }
}
