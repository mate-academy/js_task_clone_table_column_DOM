'use strict';

const rows = [...document.querySelectorAll('tr')];

for (const row of rows) {
  const cellToCopy = row.cells[1].cloneNode(true);

  row.cells[4].before(cellToCopy);
}
