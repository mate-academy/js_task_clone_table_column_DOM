'use strict';

const tableElement = document.querySelector('table');

for (const raw of tableElement.rows) {
  const cells = raw.cells;

  cells[3].after(cells[1].cloneNode(true));
}
