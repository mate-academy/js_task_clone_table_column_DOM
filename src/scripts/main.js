'use strict';

const tableRow = document.querySelectorAll('tr');

tableRow.forEach(row => {
  const tdCopy = row.children[1].cloneNode(true);
  const trCopy = [...row.children];

  trCopy.splice(4, 0, tdCopy);
  row.append(...trCopy);
});
