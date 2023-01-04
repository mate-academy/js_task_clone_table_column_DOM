'use strict';

const rows = document.querySelectorAll('tr');

rows.forEach(row => {
  const newEL = row.children[1].cloneNode(true);

  row.insertBefore(newEL, row.children[4]);
});
