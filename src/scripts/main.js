'use strict';

const rows = document.querySelectorAll('tr');

rows.forEach(row => {
  const clonnedCell = row.children[1].cloneNode(true);

  row.children[3].after(clonnedCell);
});
