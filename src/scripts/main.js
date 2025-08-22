'use strict';

const table = document.querySelector('table');
const rows = table.querySelectorAll('tr');

rows.forEach((row) => {
  const cells = row.querySelectorAll('td, th');

  if (cells.length > 1) {
    const secondCellCopy = cells[1].cloneNode(true);

    cells[cells.length - 1].before(secondCellCopy);
  }
});
