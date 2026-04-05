'use strict';

const table = document.querySelector('table');

for (const row of table.rows) {
  // знаходимо потрібну комірку в цьому рядку
  const targetCell = row.cells[1];

  // клон. її (true- копіює разом із вмістом)
  const clone = targetCell.cloneNode(true);

  // знах останню комірку щоб знати куди вписати клон
  const lastCell = row.cells[row.cells.length - 1];

  //  insertBefore(що_вставити, перед_чим)
  row.insertBefore(clone, lastCell);
}
