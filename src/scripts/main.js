'use strict';

function cloneColumn(part, el) {
  const table = document.querySelector('table');

  const secondColumn = table.querySelectorAll(`${part} tr ${el}:nth-child(2)`);

  for (let i = 0; i <= secondColumn.length - 1; i++) {
    const clonedColumn = secondColumn[i].cloneNode(true);
    const lastColumn = table.querySelector(
      `${part} tr:nth-child(${i + 1}) ${el}:last-child`,
    );

    lastColumn.parentNode.insertBefore(clonedColumn, lastColumn);
  }
}

document.addEventListener('DOMContentLoaded', cloneColumn('thead', 'th'));
document.addEventListener('DOMContentLoaded', cloneColumn('tfoot', 'th'));
document.addEventListener('DOMContentLoaded', cloneColumn('tbody', 'td'));
