'use strict';

const tableRows = document.querySelectorAll('tr');

tableRows.forEach(row => (
  row.insertBefore(row.cells[1].cloneNode(true), row.cells[4])
));
