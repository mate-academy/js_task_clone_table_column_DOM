'use strict';

const table = document.querySelectorAll('tr');

for (const row of table) {
  const cell = row.children[1].cloneNode(true);

  row.children[3].after(cell);
}
