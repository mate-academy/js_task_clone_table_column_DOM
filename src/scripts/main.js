'use strict';

const tableRows = document.querySelectorAll('tr');

for (const tr of tableRows) {
  const td = tr.children[1].cloneNode(true);

  tr.appendChild(td);
  tr.insertBefore(td, tr.children[4]);
}
