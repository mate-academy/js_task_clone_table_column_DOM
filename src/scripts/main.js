'use strict';

const rows = document.querySelectorAll('thead tr, tbody tr, tfoot tr');

rows.forEach((row) => {
  if (row.cells.length < 2) {
    return;
  }

  if (row.querySelector('[data-cloned-from="2"]')) {
    return;
  }

  const clone = row.cells[1].cloneNode(true);

  clone.setAttribute('data-cloned-from', '2');

  row.insertBefore(clone, row.children[row.children.length - 1]);
});
