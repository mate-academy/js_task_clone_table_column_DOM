'use strict';

const tableRows = document.querySelectorAll('tr');

tableRows.forEach((row) => {
  const clone = row.cells[1].cloneNode(true);
  const lastClone = row.cells[row.cells.length - 1];

  row.insertAdjacentElement('beforeend', clone);
  row.insertAdjacentElement('beforeend', lastClone);
});
