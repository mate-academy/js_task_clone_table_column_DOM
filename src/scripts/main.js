'use strict';

const tableRows = document.querySelectorAll('tr');

tableRows.forEach((row) => {
  const copy = row.children[1].cloneNode(true);

  row.insertBefore(copy, row.children[4]);
});
