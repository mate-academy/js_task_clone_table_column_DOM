'use strict';

const rows = document.querySelectorAll('tr');

rows.forEach((el) => {
  const posColumn = el.cells[1].cloneNode(true);
  const lastColumn = el.cells[el.cells.length - 1];

  el.insertBefore(posColumn, lastColumn);
});
