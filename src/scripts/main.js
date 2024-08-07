'use strict';

const rows = [...document.querySelectorAll('tr')];

rows.forEach((row) => {
  const cells = row.cells;

  cells[3].after(cells[1].cloneNode(true));
});
