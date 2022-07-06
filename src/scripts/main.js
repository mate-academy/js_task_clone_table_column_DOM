'use strict';

const rows = document.querySelectorAll('tr');

for (const row of rows) {
  const secondColumnCopy = row.children[1].cloneNode(true);

  row.insertBefore(secondColumnCopy, row.children[4]);
}
