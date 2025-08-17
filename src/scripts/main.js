'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');

  if (!table) {
    return;
  }

  const rows = table.querySelectorAll('thead tr, tbody tr, tfoot tr');

  rows.forEach((tr) => {
    const cells = tr.children;

    if (cells.length < 2) {
      return;
    }

    const source = cells[1];
    const clone = source.cloneNode(true);

    const beforeLast = cells[cells.length - 1];

    tr.insertBefore(clone, beforeLast);
  });
});
