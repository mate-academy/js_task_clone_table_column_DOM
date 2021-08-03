'use strict';

const table = document.querySelector('table');

const rows = [...table.rows];

for (const i of rows) {
  const lastColumn = i.lastElementChild;

  const insertedElement = (i.cells[1]).cloneNode(true);

  i.insertBefore(insertedElement, lastColumn);
}
