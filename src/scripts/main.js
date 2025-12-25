'use strict';

for (const tr of document.querySelectorAll('thead tr')) {
  if (tr.children.length > 1) {
    const cell = tr.children[1];
    const clone = cell.cloneNode(true);

    tr.insertBefore(clone, tr.lastElementChild);
  }
}

for (const tr of document.querySelectorAll('tbody tr')) {
  if (tr.children.length > 1) {
    const cell = tr.children[1];
    const clone = cell.cloneNode(true);

    tr.insertBefore(clone, tr.lastElementChild);
  }
}

for (const tr of document.querySelectorAll('tfoot tr')) {
  if (tr.children.length > 1) {
    const cell = tr.children[1];
    const clone = cell.cloneNode(true);

    tr.insertBefore(clone, tr.lastElementChild);
  }
}
