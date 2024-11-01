'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');
  const head = table.querySelector('thead tr');
  const positionHeader = head.children[1].cloneNode(true);

  head.insertBefore(positionHeader, head.children[head.children.length - 1]);

  const rows = table.querySelectorAll('tbody tr');

  rows.forEach((row) => {
    const positionCell = row.children[1].cloneNode(true);

    row.insertBefore(positionCell, row.children[row.children.length - 1]);
  });

  const footer = table.querySelector('tfoot tr');
  const posFoot = footer.children[1].cloneNode(true);

  footer.insertBefore(posFoot, footer.children[footer.children.length - 1]);
});
