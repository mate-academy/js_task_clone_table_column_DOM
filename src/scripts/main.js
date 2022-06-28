'use strict';

const rows = document.querySelectorAll('tr');

for (const row of rows) {
  const second = row.children[1].cloneNode(true);
  const last = row.children[row.children.length - 1];

  last.insertAdjacentElement('beforebegin', second);
}
