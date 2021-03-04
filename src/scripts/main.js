'use strict';

const [...tr] = document.querySelectorAll('tr');

function copyColumns(copy, which, insert) {
  for (const row of copy) {
    const copyCellule = row.children[which].cloneNode(true);

    row.children[insert].before(copyCellule);
  }
}

copyColumns(tr, 1, 4);
