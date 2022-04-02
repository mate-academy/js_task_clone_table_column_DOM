'use strict';

// write your code here
const rows = document.querySelectorAll('tr');

for (const row of rows) {
  row.cells[4].before(row.cells[1].cloneNode(true));
}
