'use strict';

const rowsB = document.querySelectorAll('tr');

rowsB.forEach(row => {
  const currentB = row.cells[1].cloneNode(true);
  const nextB = row.lastElementChild;

  nextB.before(currentB);
});
