'use strict';

const table = document.querySelectorAll('tr');

for (const row of table) {
  const clonedCol = row.children[1].cloneNode(true);

  row.children[3].after(clonedCol);
}
