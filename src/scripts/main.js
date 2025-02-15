'use strict';

const table = document.querySelector('table');

const sections = ['thead', 'tbody', 'tfoot'];

sections.forEach((section) => {
  const rows = table.querySelectorAll(`${section} tr`);

  rows.forEach((row) => {
    const cells = row.querySelectorAll('td, th');
    const secondCell = cells[1];
    const lastCell = cells[cells.length - 1];

    const clonedCell = secondCell.cloneNode(true);

    row.insertBefore(clonedCell, lastCell);
  });
});
