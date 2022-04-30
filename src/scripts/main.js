'use strict';

[...document.querySelector('table').rows].forEach(row => {
  const copiedCell = row.cells[1].cloneNode(true);

  row.insertBefore(copiedCell, row.cells[4]);
});
