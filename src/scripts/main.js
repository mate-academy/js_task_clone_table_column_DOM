'use strict';

const tr = document.querySelectorAll('tr');

for (const item of tr) {
  const clone = item.children[1].cloneNode(true);
  const lastColumn = item.lastElementChild;

  lastColumn.before(clone);
}
