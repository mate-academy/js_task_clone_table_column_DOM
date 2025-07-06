'use strict';

// write your code here
const table = document.querySelector('table');

['thead', 'tbody', 'tfoot'].forEach((sec) => {
  const section = table.querySelector(sec);

  if (!section) {
    return;
  }

  section.querySelectorAll('tr').forEach((tr) => {
    const src = tr.cells[1];

    if (!src) {
      return;
    }

    const clone = src.cloneNode(true);
    const beforeNode = tr.cells[tr.cells.length - 1];

    tr.insertBefore(clone, beforeNode);
  });
});
