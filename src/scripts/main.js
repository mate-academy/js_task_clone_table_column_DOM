'use strict';

// write your code here
const table = document.querySelector('table');

[...table.children].forEach((t) => {
  [...t.children].forEach((tr) => {
    const cloneRow5 = tr.cells[4].cloneNode(true);
    const cloneRow2 = tr.cells[1].cloneNode(true);

    tr.removeChild(tr.cells[4]);
    tr.append(cloneRow2);
    tr.append(cloneRow5);
  });
});
