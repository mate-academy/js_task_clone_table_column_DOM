'use strict';

const tableRows = document.querySelectorAll('tr');

[...tableRows].forEach(row => {
  const secondCellClone = row.children[1].cloneNode(true);

  row.children[3].before(secondCellClone);
});
