'use strict';

const table = document.querySelectorAll('tr');

for (const row of table) {
  row.cells[4].before(row.cells[1].cloneNode(true));
}
