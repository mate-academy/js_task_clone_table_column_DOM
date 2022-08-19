'use strict';

const rows = document.querySelectorAll('tr');

for (const row of rows) {
  row.insertBefore(row.cells[1].cloneNode(true), row.cells[4]);
}
