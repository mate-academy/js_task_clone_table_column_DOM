'use strict';

const rows = document.querySelectorAll('tr');
const columnCopyId = 1;
const columnPlaceId = 4;

for (const row of rows) {
  const copy = row.children[columnCopyId].cloneNode(true);

  row.children[columnPlaceId].before(copy);
}
