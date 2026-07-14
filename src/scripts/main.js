'use strict';

const rows = document.querySelectorAll('tr');

// Крок 1. Клонуємо першу колонку і додаємо її в кінець
rows.forEach((row) => {
  if (row.cells.length > 0) {
    const firstCellClone = row.cells[0].cloneNode(true);

    row.appendChild(firstCellClone);
  }
});

// Крок 2. Клонуємо другу колонку і вставляємо перед останньою
rows.forEach((row) => {
  if (row.cells.length > 1) {
    const secondCellClone = row.cells[1].cloneNode(true);

    row.insertBefore(secondCellClone, row.cells[row.cells.length - 1]);
  }
});
