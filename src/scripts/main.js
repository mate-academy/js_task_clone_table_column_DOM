'use strict';

const rows = document.querySelectorAll('tr');

for (const row of rows) {
  if (row.children.length === 5) {
    const clone = row.children[1].cloneNode(true);

    row.append(clone);
    row.append(row.children[4]);
  }
}
