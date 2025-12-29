'use strict';

// write your code here
const rows = document.querySelectorAll('table tr');

for (const row of rows) {
  const cells = row.querySelectorAll('th, td');

  if (cells.length < 2) {
    continue;
  }

  const clone = cells[1].cloneNode(true);
  const last = cells[cells.length - 1];

  row.insertBefore(clone, last);
}
