'use strict';

const table = document.querySelector('table');
const thead = table.querySelector('thead tr');
const tbody = table.querySelector('tbody');
const tfoot = table.querySelector('tfoot tr');

const clonedHeader = thead.children[1].cloneNode(true);

thead.insertBefore(clonedHeader, thead.lastElementChild);

const bodyRows = tbody.querySelectorAll('tr');

bodyRows.forEach((row) => {
  const clonedCell = row.children[1].cloneNode(true);

  row.insertBefore(clonedCell, row.lastElementChild);
});

const clonedFooter = tfoot.children[1].cloneNode(true);

tfoot.insertBefore(clonedFooter, tfoot.lastElementChild);
