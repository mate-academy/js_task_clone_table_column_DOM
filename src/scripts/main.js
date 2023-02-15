'use strict';

const rows = document.querySelectorAll('tr');

rows.forEach(row => {
  const children = row.children;
  const newColumn = children[1].cloneNode(true);

  row.lastElementChild.before(newColumn);
});
