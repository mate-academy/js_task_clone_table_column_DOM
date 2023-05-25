'use strict';

const rows = document.querySelectorAll('tr');

for (const row of rows) {
  const cloned = row.cells[1].cloneNode(true);
  const lastChild = row.cells[4];

  row.insertBefore(cloned, lastChild);
}
