'use strict';

const rows = [...document.querySelector('table').rows];

rows.forEach((row) => {
  const cell = row.cells[1].cloneNode(true);

  row.insertBefore(cell, row.lastElementChild);
});
