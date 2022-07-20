'use strict';

const tableRows = document.querySelectorAll('tr');

tableRows.forEach((row) => {
  const placingIndex = row.children.length - 2;

  row.children[placingIndex].after(row.children[1].cloneNode(true));
});
