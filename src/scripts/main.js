'use strict';

const table = document.querySelector('table');

[...table.rows].forEach(row =>
  row.lastElementChild.before(
    row.firstElementChild.nextElementSibling.cloneNode(true)
  ));
