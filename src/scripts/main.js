'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');
  const cellsArray = Array.from(table.tHead.rows[0].cells);
  const positionIndex = cellsArray.findIndex(
    (cell) => cell.innerText === 'Position',
  );
  const lastIndex = cellsArray.length - 1;

  for (const el of table.children) {
    for (const row of el.rows) {
      const positionElement = row.cells[positionIndex].cloneNode(true);

      row.insertBefore(positionElement, row.cells[lastIndex]);
    }
  }
});
