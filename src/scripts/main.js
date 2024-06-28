'use strict';

const table = document.querySelectorAll('table tr');

const cloneTr = [...table];

cloneTr.forEach((row) => {
  const dublicateTh = row.children[1].cloneNode(true);

  row.children[4].before(dublicateTh);
});
