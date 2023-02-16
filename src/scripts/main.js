'use strict';

const table = document.querySelector('table');

const tableRows = table.querySelectorAll('tr');

for (const row of tableRows) {
  row.children[4].before(row.children[1].cloneNode(true));
};
