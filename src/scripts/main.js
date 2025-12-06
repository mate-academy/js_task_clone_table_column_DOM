'use strict';

const rows = document.querySelectorAll('table tr');

for (const row of rows) {
  const cells = row.querySelectorAll('th, td');

  if (!cells[1]) {
    continue;
  }

  const second = cells[1];
  const clone = second.cloneNode(true);
  const reference = cells[cells.length - 1];

  row.insertBefore(clone, reference);
}
