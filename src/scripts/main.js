'use strict';

const rows = [...document.querySelectorAll('tr')];

for (const row of rows) {
  const cloneRow = row.children[1].cloneNode(true);

  row.insertBefore(cloneRow, row.children[4]);
}
