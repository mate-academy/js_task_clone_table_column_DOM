'use strict';

const table = document.querySelector('table');
const cellToCopy = 1;
const cellToInsert = 4;

[...table.rows].forEach(row =>
  row.children[cellToInsert].before(
    row.children[cellToCopy].cloneNode(true)
  ));
