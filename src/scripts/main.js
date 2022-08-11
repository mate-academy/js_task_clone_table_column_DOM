'use strict';

const tableRow = document.querySelectorAll('tr');

for (const row of tableRow) {
  const cloneItem = row.children[1].cloneNode(true);

  row.children[3].after(cloneItem);
}
