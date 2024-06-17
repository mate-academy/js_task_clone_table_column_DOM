'use strict';

const rows = document.querySelectorAll('tr');

rows.forEach((row) => {
  const clonedTableNode = row.children[1].cloneNode('deep');

  row.children[row.children.length - 1].insertAdjacentElement(
    'beforebegin',
    clonedTableNode,
  );
});
