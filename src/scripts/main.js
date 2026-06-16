'use strict';

const table = document.querySelector('table');
// ищем table

['thead', 'tbody', 'tfoot'].forEach((section) => {
  // проходимся по таблицам
  const rows = table.querySelectorAll(`${section} tr`);
  // находим строки tr в секции

  // проходимся по каждой строке
  rows.forEach((row) => {
    // берем вторую ячейку строки
    const secondCells = row.cells[1];
    // клонируем ёё с содержимым
    const cloneCells = secondCells.cloneNode(true);

    row.insertBefore(cloneCells, row.cells[row.cells.length - 1]);
    // вставляем клон перед последней ячейкой секции
  });
});
