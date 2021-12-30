'use strict';

const rows = document.querySelectorAll('tr');

for (const row of rows) {
  const cloneTd = row.children[1].cloneNode(true);

  row.children[4].before(cloneTd);
}
