'use strict';

const table = document.querySelector('table');
const arrRows = table.rows;

[...arrRows].forEach((row) => {
  const cloneTd = row.cells[1].cloneNode(true);

  row.cells[3].insertAdjacentElement('afterend', cloneTd);
});
