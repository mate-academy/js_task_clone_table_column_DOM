'use strict';

const table = document.querySelectorAll('tr');

for (const row of table) {
  row.cells[3].after(row.cells[1].cloneNode(true));
}
