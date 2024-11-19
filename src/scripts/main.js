'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const tfoot = document.querySelector('tfoot');
const columnIndex = 1;

// Функція для клонування клітинки і вставки перед останнім стовпцем
function cloneAndInsertBeforeLast(row) {
  const cellToClone = row.cells[columnIndex];

  if (cellToClone) {
    const clonedCell = cellToClone.cloneNode(true);
    const targetIndex = row.cells.length - 1;

    row.insertBefore(clonedCell, row.cells[targetIndex]);
  }
}

// Клонує клітинки в заголовку таблиці
if (thead.rows.length > 0) {
  cloneAndInsertBeforeLast(thead.rows[0]);
}

// Клонує клітинки в кожному рядку тіла таблиці
const tbodyRows = tbody.rows;

for (let i = 0; i < tbodyRows.length; i++) {
  cloneAndInsertBeforeLast(tbodyRows[i]);
}

// Клонує клітинки в футері таблиці, якщо він існує
if (tfoot && tfoot.rows.length > 0) {
  cloneAndInsertBeforeLast(tfoot.rows[0]);
}
