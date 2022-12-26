'use strict';

const rows = document.querySelectorAll('tr');

rows.forEach(row => {
  const position = row.children[1];
  const clone = position.cloneNode(true);

  row.children[3].after(clone);
});
