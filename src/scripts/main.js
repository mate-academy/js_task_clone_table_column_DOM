'use strict';

const list = document.querySelectorAll('tr');

for (const tr of list) {
  const copy = tr.cells[1].cloneNode(true);

  tr.cells[4].before(copy);
}

// write your code here
