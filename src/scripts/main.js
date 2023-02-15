'use strict';

const rows = document.querySelectorAll('tr');

rows.forEach(row => {
  const currentRow = row.cells[1].cloneNode(true);
  const neighborRow = row.lastElementChild;

  neighborRow.before(currentRow);
});
