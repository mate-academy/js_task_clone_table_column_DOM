'use strict';

const table = document.querySelectorAll('tr');

for (let i = 0; i < table.length; i++) {
  const row = table[i];
  const cell = row.children[1].cloneNode(true);

  row.children[4].before(cell);
}
