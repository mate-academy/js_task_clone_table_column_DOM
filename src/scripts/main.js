'use strict';

const tableRow = document.querySelectorAll('tr');

for (const item of tableRow) {
  const position = item.children[1].cloneNode(true);

  item.lastElementChild.before(position);
}
