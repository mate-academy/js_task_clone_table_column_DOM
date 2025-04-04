'use strict';

const rows = [...document.querySelectorAll('tr')];

rows.forEach((row) => {
  const positionRow = row.children[1].cloneNode(true);

  row.lastElementChild.before(positionRow);
});

// write your code here
