'use strict';

const tr = document.querySelectorAll('tr');

for (const row of tr) {
  row.insertBefore(
    row.cells[1].cloneNode(true),
    row.cells[4]
  );
}
