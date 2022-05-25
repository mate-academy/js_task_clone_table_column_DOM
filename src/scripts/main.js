'use strict';

const table = document.querySelector('table');
const alltr = table.rows;

for (const tr of alltr) {
  const second = tr.children[1];

  tr.children[4].before(second.cloneNode(true));
}
