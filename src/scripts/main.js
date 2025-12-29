'use strict';

// write your code here
const table = document.querySelector('table');

[...table.children].forEach((t) => {
  [...t.children].forEach((tr) => {
    const cloneRow2 = tr.cells[1].cloneNode(true);

    tr.insertBefore(cloneRow2, tr.cells[4]);
  });
});
