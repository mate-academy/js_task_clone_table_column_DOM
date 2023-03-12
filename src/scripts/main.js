'use strict';

const rows = document.querySelectorAll('tr');

for (const row of rows) {
  const copyCell = row.cells[1].cloneNode(true);

  row.children[4].before(copyCell);
}
