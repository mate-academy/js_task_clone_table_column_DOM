'use strict';

const rows = document.querySelectorAll('tr');

rows.forEach(({ cells }) => {
  const elementToCopy = cells[1];
  const indexToInsert = cells.length - 1;

  cells[indexToInsert].before(elementToCopy.cloneNode(true));
});
