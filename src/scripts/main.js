'use strict';

const rows = document.querySelectorAll('table tr');

rows.forEach((tr) => {
  const cells = tr.children;
  const second = cells[1];
  const last = cells[cells.length - 1];
  const clone = second.cloneNode(true);

  tr.insertBefore(clone, last);
});
