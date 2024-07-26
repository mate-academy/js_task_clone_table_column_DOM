'use strict';

const rows = document.getElementsByTagName('tr');

for (let i = 0; i < rows.length; i++) {
  const cells = rows[i].children;

  const clone = cells[1].cloneNode(true);

  rows[i].insertBefore(clone, cells[cells.length - 1]);
}
