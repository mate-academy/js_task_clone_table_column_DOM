'use strict';

const table = document.querySelector('table');
const rows = table.querySelectorAll('tr');

// Отримуємо заголовок таблиці окремо
const headRow = table.querySelector('thead tr');
const headCells = headRow.querySelectorAll('th');

// Створюємо нову колонку для кожного рядка (тіло таблиці)
for (const row of rows) {
  const cells = row.querySelectorAll('td');

  // Якщо є клітинки в тілі таблиці
  if (cells.length > 1) {
    const newCell = document.createElement('td');

    newCell.textContent = cells[1].textContent;

    const lastCell = row.lastElementChild;

    row.insertBefore(newCell, lastCell);
  }

  // Якщо є клітинки в заголовку таблиці
  if (row === headRow && headCells.length > 1) {
    const newHeaderCell = document.createElement('th');

    newHeaderCell.textContent = cells[1] ? cells[1].textContent : '';

    newHeaderCell.textContent = headCells[1].textContent;

    const lastHeaderCell = row.lastElementChild;

    row.insertBefore(newHeaderCell, lastHeaderCell);
  }
}
