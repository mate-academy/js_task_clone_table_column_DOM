'use strict';

const tableRows = document.querySelectorAll('tr');

tableRows.forEach((row) => {
  if (row.children.length > 1) {
    const copyRowCell = row.children[1].cloneNode(true);
    const lastChild = row.lastElementChild;

    row.insertBefore(copyRowCell, lastChild);
  }
});
