'use strict';

const rows = document.querySelectorAll('tr');

for (const row of rows) {
  const item = row.children[1];

  row.children[row.children.length - 1].before(item.cloneNode(true));
}
