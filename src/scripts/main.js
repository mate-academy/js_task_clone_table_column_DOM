'use strict';

const table = document.querySelector('table');
const sections = ['thead', 'tbody', 'tfoot'];

for (const section of sections) {
  const rows = table.querySelector(section).rows;

  for (const row of rows) {
    const cells = row.cells;
    const clonedCell = cells[1].cloneNode(true);

    cells[1].after(clonedCell)
  }
}
