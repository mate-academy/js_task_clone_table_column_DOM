'use strict';

const tableRows = document.querySelectorAll('tr');

tableRows.forEach((row) => {
  row.insertBefore(row.children[1].cloneNode(true), row.children[4]);
});
