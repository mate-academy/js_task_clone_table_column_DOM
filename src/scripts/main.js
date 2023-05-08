'use strict';

const clone = document.querySelectorAll('tr');

for (const key of clone) {
  const cloneTd = key.cells[1].cloneNode(true);

  key.insertBefore(cloneTd, key.children[4]);
}
