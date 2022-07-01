'use strict';

const tableRows = document.querySelectorAll('tr');

tableRows.forEach((tableRow) => {
  tableRow.children[4].before(tableRow.children[1].cloneNode(true));
});
