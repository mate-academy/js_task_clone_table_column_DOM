'use strict';

// write your code here
const tr = document.querySelectorAll('tr');

Array.from(tr).forEach((row) => {
  const copyCell = row.children[1].cloneNode(true);
  const pasteBeforeEl = row.children[row.childElementCount - 1];

  row.insertBefore(copyCell, pasteBeforeEl);
});
