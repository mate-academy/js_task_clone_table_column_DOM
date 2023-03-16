'use strict';

const rows = document.querySelectorAll('tr');

for (const row of rows) {
  const cloneCell = row.children[1].cloneNode(true);

  row.children[4].before(cloneCell);
}
