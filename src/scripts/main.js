'use strict';

const tableRows = document.querySelectorAll('tr');

tableRows.forEach((row) => {
  row.children[row.children.length - 1].before(row.children[1].cloneNode(true));
});
