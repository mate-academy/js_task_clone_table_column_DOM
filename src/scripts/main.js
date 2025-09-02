'use strict';

const tr = document.querySelectorAll('tr');

tr.forEach((n) => {
  const second = n.cells[1];
  const copy = second.cloneNode(true);

  n.insertBefore(copy, n.cells[n.cells.length - 1]);
});
