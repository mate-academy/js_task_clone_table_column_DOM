'use strict';

const table = document.querySelector('table');

[...table.rows].forEach((row, index) => {
  const clonedElement = row.cells[1].cloneNode(true);

  table.rows[index].lastElementChild.before(clonedElement);
});
