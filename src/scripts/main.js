'use strict';

const rows = document.querySelectorAll('tr');

rows.forEach(row => {
  const element = row.children[1].cloneNode(true);

  row.children[3].after(element);
});
