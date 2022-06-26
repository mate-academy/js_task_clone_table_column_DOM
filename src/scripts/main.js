'use strict';

const allRows = document.querySelectorAll('tr');

[...allRows].forEach(row => {
  const copyCell = row.children[1].cloneNode(true);

  row.children[4].before(copyCell);
});
