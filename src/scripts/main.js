'use strict';

const rows = document.querySelectorAll('tr');
const indexToCopy = 1;
const indexToInsert = 4;

rows.forEach(cells => {
  const copiedElement = cells.children[indexToCopy];

  cells.insertBefore(copiedElement.cloneNode(true),
    cells.children[indexToInsert]);
});
