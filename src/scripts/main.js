'use strict';

const rows = document.querySelectorAll('tr');

rows.forEach((tr) => {
  const cellToCopy = tr.children[1];
  const clonedCell = cellToCopy.cloneNode(true);
  const lastCell = tr.children[tr.children.length - 1];

  lastCell.before(clonedCell);
});
