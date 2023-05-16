'use strict';

const tableRows = document.querySelectorAll('tr');

tableRows.forEach(row => {
  const copyEl = row.children[1];

  row.children[3].after(copyEl.cloneNode(true));
});
