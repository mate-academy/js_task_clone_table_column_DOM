'use strict';

const thead = document.querySelectorAll('thead tr, tbody tr, tfoot tr')

thead.forEach(function (each) {
  const cells = each.children;
  const targetCell = cells[1];

  if (cells.length >= 2) {
    const clonedCell = targetCell.cloneNode(true);

    const lastCell = cells[cells.length - 1];

    each.insertBefore(clonedCell, lastCell);
  }
});
