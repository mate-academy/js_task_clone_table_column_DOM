'use strict';

const table = document.querySelector('table');
const tr = table.querySelectorAll('tr');

for (let i = 0; i < tr.length; i++) {
  if (tr[i].children.length < 2) {
    continue;
  }

  const clonedTd = tr[i].children[1].cloneNode(true);

  const lastTd = tr[i].lastElementChild;

  tr[i].insertBefore(clonedTd, lastTd);
}
