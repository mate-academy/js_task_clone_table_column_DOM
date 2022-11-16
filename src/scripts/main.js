'use strict';

const table = document.querySelector('table').children;

for (const rows of table) {
  const row = rows.querySelectorAll('tr');

  for (const item of row) {
    const position = item.children[1];
    const copyPosition = position.cloneNode(true);

    item.children[3].after(copyPosition);
  }
};
