'use strict';

const allTr = document.querySelectorAll('tr');

for (const tr of [...allTr]) {
  const copy = tr.children[1].cloneNode(true);

  tr.insertBefore(copy, tr.children[4]);
}
