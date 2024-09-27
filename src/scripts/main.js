'use strict';

const rows = Array.from(document.querySelectorAll('tr'));

for (const row of rows) {
  const newCol = row.children[1].cloneNode(true);

  row.insertBefore(newCol, row.children[row.children.length - 1]);
}
