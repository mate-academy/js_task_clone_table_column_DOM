'use strict';

const rows = document.querySelectorAll('tr');

for (const row of rows) {
  const column = row.children[1];

  row.children[3].after(column.cloneNode(true));
}
