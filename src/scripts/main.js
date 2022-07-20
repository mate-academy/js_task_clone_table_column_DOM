'use strict';

const tableRows = document.querySelectorAll('tr');

tableRows.forEach((row) => {
  const placingId = row.children.length - 2;

  row.children[placingId].after(row.children[1].cloneNode(true));
});
