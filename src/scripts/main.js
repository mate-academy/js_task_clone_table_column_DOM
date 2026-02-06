'use strict';

const tr = document.querySelectorAll('tr');

Array.from(tr).forEach((row) => {
  if (row.children.length > 1) {
    const pasteBeforeEl = row.children[row.childElementCount - 1];
    const sourceClone = row.children[1];
    const copyCell = sourceClone.cloneNode(true);

    row.insertBefore(copyCell, pasteBeforeEl);
  }
});
