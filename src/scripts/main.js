'use strict';

const tableRow = document.querySelectorAll('tr');

for (const row of tableRow) {
  const clonedCeil = row.children[1].cloneNode(true);

  row.children[3].after(clonedCeil);
}
