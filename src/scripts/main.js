'use strict';

const table = document.querySelectorAll('tr');

for (const row of table) {
  const cell = document.createElement('th');

  cell.textContent = row.children[1].textContent;

  row.children[3].after(cell);
};
