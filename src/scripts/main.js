'use strict';

const items = document.querySelectorAll('tr');

for (const row of items) {
  const node = row.children[1].cloneNode(true);
  const lastElem = row.children[4];

  lastElem.before(node);
}
