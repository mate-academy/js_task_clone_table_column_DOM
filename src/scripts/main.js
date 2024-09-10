'use strict';

const table = document.querySelector('table');

function cloneSecondColumn() {
  const sections = ['thead', 'tbody', 'tfoot'];

  sections.forEach((section) => {
    const rows = table.querySelectorAll(`${section} tr`);

    rows.forEach((row) => {
      const cells = Array.from(row.querySelectorAll('td, th'));

      const secondCell = cells[1].cloneNode(true);

      row.insertBefore(secondCell, cells[cells.length - 1].previousSibling);
    });
  });
}

cloneSecondColumn();
