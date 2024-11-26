'use strict';

const rows = [...document.querySelectorAll('tr')];

rows.forEach((row) => {
  const clonRow = row.children[1].cloneNode(true);

  row.lastElementChild.before(clonRow);
});
