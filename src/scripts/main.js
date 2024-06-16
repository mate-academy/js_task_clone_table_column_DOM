'use strict';

const columns = document.querySelectorAll('tr');

columns.forEach((el) => {
  const posColumn = el.cells[1];
  const posColumnClone = posColumn.cloneNode(true);
  const lastColumn = el.cells[el.cells.length - 1];

  el.insertBefore(posColumnClone, lastColumn);
});
