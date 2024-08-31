'use strict';

const tableRows = document.querySelectorAll('tr');

[...tableRows].forEach((row) => {
  const cloned = row.cells[1].cloneNode(true);

  row.cells[row.cells.length - 1].before(cloned);
});
