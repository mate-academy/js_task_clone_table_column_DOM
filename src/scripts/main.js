'use strict';

const tableRows = document.querySelectorAll('tr');

for (const row of tableRows) {
  const copyCell = row.cells[1].cloneNode(true);

  row.insertBefore(copyCell, [...row.cells][4]);
}
