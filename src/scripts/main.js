'use strict';

const rows = document.querySelectorAll('tr');

rows.forEach(row => {
  const value = row.children[1].cloneNode(true);

  row.insertBefore(value, row.children[4]);
});
