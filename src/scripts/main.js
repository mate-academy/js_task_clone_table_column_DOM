'use strict';

const rows = [ ...document.querySelectorAll('tr') ];

for (const row of rows) {
  const newCell = row.children[1].cloneNode(true);

  row.insertBefore(newCell, row.children[4]);
}
