'use strict';

const tableRows = document.querySelectorAll('tr');

[...tableRows].forEach((row) => {
  const cells = row.children;
  const cellClone = cells[1].cloneNode(true);

  row.insertBefore(cellClone, row.lastElementChild);
});
