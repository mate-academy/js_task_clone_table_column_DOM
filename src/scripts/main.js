'use strict';

const tableRows = document.querySelectorAll('tr');

tableRows.forEach(tr => {
  const td = tr.cells[1].cloneNode(true);

  tr.cells[tr.cells.length - 2].after(td);
});
