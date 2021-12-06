'use strict';

const tr = document.querySelectorAll('tr');

for (const item of tr) {
  item.cells[4].before(item.cells[1].cloneNode(true));
}
