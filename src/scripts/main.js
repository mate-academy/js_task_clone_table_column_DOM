'use strict';

const rows = document.querySelectorAll('tr');

[...rows].map(row => {
  const childrenOfRow = row.children;

  const cloneOfCell = childrenOfRow[1].cloneNode(childrenOfRow[1].textContent);

  row.append(cloneOfCell);
});
