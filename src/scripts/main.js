'use strict';

const tableRows = document.querySelectorAll('tr');

for (const row of tableRows) {
  row.append(row.cells[1].cloneNode(true));
}
