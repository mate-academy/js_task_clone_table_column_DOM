'use strict';

// write your code here
const table = document.querySelector('table');
const rows = table.querySelectorAll('tr');

rows.forEach((r) => {
  const cel = r.children;

  if (cel.length < 2) {
    return;
  }

  const cloneCel = cel[1].cloneNode(true);

  r.insertBefore(cloneCel, cel[cel.length - 1]);
});
