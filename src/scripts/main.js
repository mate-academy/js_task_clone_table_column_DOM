'use strict';

const table = document.querySelector('table');
const arrRows = table.rows;

[...arrRows].forEach((row, i) => {
  if (i > 0) {
    const cloneTd = row.cells[1].cloneNode(true);

    arrRows[i].cells[3].insertAdjacentElement('afterend', cloneTd);
  } else {
    const firstTh = row.cells[1].cloneNode(true);

    const positionEl = row.cells[3];

    positionEl.insertAdjacentElement('afterend', firstTh);
  }
});
