'use strict';

const rows = document.querySelectorAll('tr');

for (const row of rows) {
  const copyCell = row.children[1].cloneNode(true);

  row.insertBefore(copyCell, row.children[4]);
}
