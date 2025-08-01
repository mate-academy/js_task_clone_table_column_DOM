'use strict';

const rows = document.querySelectorAll('thead tr, tbody tr, tfoot tr');

for (let i = 0; i < rows.length; i++) {
  const clonedCell = rows[i].children[1].cloneNode(true);

  rows[i].insertBefore(clonedCell, rows[i].lastElementChild);
}
