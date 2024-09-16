'use strict';

const tr = document.querySelectorAll('tr');

tr.forEach(row =>
  row.insertBefore(row.cells[1].cloneNode(true), row.lastElementChild)
);
