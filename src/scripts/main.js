'use strict';

const tableRows = document.querySelectorAll('tr');

tableRows.forEach((row) => {
  const placingIndex = row.children.length - 2;
  const sourceIndex = 1;

  row.children[placingIndex].after(row.children[sourceIndex].cloneNode(true));
});
