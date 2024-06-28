'use strict';

const table = document.querySelectorAll('table tr');

const cloneTr = [...table];

cloneTr.forEach((row) => {
  const duplicateTh = row.children[1].cloneNode(true);

  row.children[4].before(duplicateTh);
});
