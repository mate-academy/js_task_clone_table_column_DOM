'use strict';

const tr = document.querySelectorAll('tr');

tr.forEach(row => {
  const copy = row.children[1].cloneNode(true);

  row.children[3].after(copy);
});
