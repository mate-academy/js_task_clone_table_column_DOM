'use strict';

// write your code here
const rows = [...document.querySelectorAll('table tr')];

rows.forEach((row) => {
  const cells = row.querySelectorAll('th, td');

  if (cells.length > 1) {
    const secondColumn = cells[1];
    const lastColumn = cells[cells.length - 1];

    const cloneColumn = secondColumn.cloneNode(true);

    lastColumn.before(cloneColumn);
  }
});
