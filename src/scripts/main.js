'use strict';

const tableRow = document.querySelectorAll('tr');

for (const item of tableRow) {
  const child = item.children[1].cloneNode(true);

  item.children[4].before(child);
}
