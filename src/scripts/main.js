'use strict';

const tr = document.querySelectorAll('tr');

tr.forEach(row => {
  const tdCopy = row.children[1].cloneNode(true);
  const rowCopy = [...row.children];

  rowCopy.splice(4, 0, tdCopy);
  row.append(...rowCopy);
});
