'use strict';

const rows = document.querySelectorAll('tr');

rows.forEach(cells => {
  const copiedElement = cells.children[1];

  cells.insertBefore(copiedElement.cloneNode(true), cells.children[4]);
});
