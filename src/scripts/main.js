'use strict';

const rows = document.querySelectorAll('tr');

rows.forEach(row => {
  const copy = row.children[1].cloneNode(true);

  row.children[3].after(copy);
});
