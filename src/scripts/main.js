'use strict';

const table = document.querySelectorAll('tr');

for (const row of table) {
  const clone = row.children[1].cloneNode(true);

  row.children[4].before(clone);
}
