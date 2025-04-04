'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');
  const thead = table.querySelector('thead tr');
  const tbody = table.querySelectorAll('tbody tr');
  const tfoot = table.querySelector('tfoot tr');

  const secondHeader = thead.children[1].cloneNode(true);

  thead.insertBefore(secondHeader, thead.children[thead.children.length - 1]);

  tbody.forEach((row) => {
    const secondCell = row.children[1].cloneNode(true);

    row.insertBefore(secondCell, row.children[row.children.length - 1]);
  });

  const secondFooter = tfoot.children[1].cloneNode(true);

  tfoot.insertBefore(secondFooter, tfoot.children[tfoot.children.length - 1]);
});
